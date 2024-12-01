<template>
  <div class="concentration">
    <h2>神経衰弱ゲーム</h2>
    暇つぶしにどうぞ
    <div class="board">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :class="{ flipped: card.flipped }"
        @click="flipCard(index)"
      >
        <div class="front">{{ card.flipped ? card.content : '?' }}</div>
      </div>
    </div>
    <p v-if="gameWon">🎉 クリア！おめでとう！ 🎉</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
      flippedCards: [],
      gameWon: false,
    };
  },
  created() {
    this.startGame();
  },
  methods: {
    startGame() {
      const contents = ["🍎", "🍊", "🍌", "🍇", "🍉", "🍓"];
      const deck = [...contents, ...contents]
        .sort(() => Math.random() - 0.5)
        .map(content => ({ content, flipped: false }));
      this.cards = deck;
      this.gameWon = false;
    },
    flipCard(index) {
      if (this.cards[index].flipped || this.flippedCards.length === 2) return;
      this.cards[index].flipped = true;
      this.flippedCards.push(index);

      if (this.flippedCards.length === 2) {
        setTimeout(() => this.checkMatch(), 1000);
      }
    },
    checkMatch() {
      const [first, second] = this.flippedCards;
      if (this.cards[first].content !== this.cards[second].content) {
        this.cards[first].flipped = false;
        this.cards[second].flipped = false;
      }
      this.flippedCards = [];
      this.checkGameWon();
    },
    checkGameWon() {
      if (this.cards.every(card => card.flipped)) {
        this.gameWon = true;
      }
    },
  },
};
</script>

<style>
.board {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 90px);
  gap: 7px;
}
.card {
  width: 90px;
  height: 90px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: transform 0.2s;
}
.card.flipped {
  background-color: #fff;
  transform: rotateY(180deg);
}

@media screen and (min-width:480px) {
  .concentration {
    margin-bottom: 100px;
  }
}
</style>
