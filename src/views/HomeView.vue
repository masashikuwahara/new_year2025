<template>
    <div class="container text-center">
      <h2>今年もよろしくお願いいたします</h2>
      <h3>おみくじをやってみる？</h3>
      <button class="btn btn-outline-danger mt-3" @click="drawOmikuji">おみくじを引く</button>
      <!-- ふわっと表示追加 -->
       <transition name="fade">
        <div v-if="result" class="mt-3">
          <h3 class="alert alert-warning">{{ result }}</h3>
        </div>
       </transition>
    </div>
</template>

<script>
export default {
  data() {
    return {
      result: null, // おみくじの結果を格納
    };
  },
  methods: {
    drawOmikuji() {
      // おみくじの結果をランダムに選択
      const omikujiResults = ["大吉", "中吉", "小吉", "末吉", "凶"];
      this.result =
        omikujiResults[Math.floor(Math.random() * omikujiResults.length)];
    },
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>