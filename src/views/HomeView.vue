<template>
    <div class="container text-center mt-5">
      <h2>今年もよろしくお願いいたします</h2>
      <h3>おみくじをやってみる？</h3>
      <button class="btn btn-primary mt-3" @click="drawOmikuji">おみくじを引く</button>
      <div v-if="result" class="mt-3">
        <h3 class="alert alert-info">{{ result }}</h3>
      </div>
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

</style>