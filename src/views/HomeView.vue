<template>
  <carousel :items-to-show="1.0" :autoplay="2000" :loop="true" :wrapAround="true">
    <slide v-for="image in images" :key="image.id">
      <img :src="image.url" :alt="image.alt">
    </slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>

<div class="container text-center mb-5">
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
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import test1 from '@/assets/001.jpg';
import test2 from '@/assets/002.jpg';
import test3 from '@/assets/003.jpg';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        { id: 1, url: test1, alt: '画像1' },
        { id: 2, url: test2, alt: '画像2' },
        { id: 3, url: test3, alt: '画像3' }
      ],
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