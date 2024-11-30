<template>
  <div>
    <h2>昨年はこんなところへ行ってきました</h2>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(item, index) in items" :key="index">
        <a class="nav-link" :class="{ active: activeTab === index }" @click="activeTab = index">{{ item.name }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" v-for="(item, index) in items" :key="index" :class="{ active: activeTab === index }">
        <h3>{{ item.name }} <br></h3> 
        <img :src="item.image" :alt="item.name">
      </div>
    </div>
  </div>
</template>

<script>
import moriokaImage from '@/assets/morioka.jpg';
import chuusonjiImage from '@/assets/chuusonji.jpg';
import daisenryouImage from '@/assets/daisenryou.jpg';
import toudaijiImage from '@/assets/toudaiji.jpg';
import naraparkImage from '@/assets/narapark.jpg';
import yoshimiImage from '@/assets/yoshimi.jpg';
import shiroishiImage from '@/assets/shiroishi.jpg';
import takashimaImage from '@/assets/takashima.jpg';
import matsumotoImage from '@/assets/matsumoto.jpg';
export default {
  data() {
    return {
      activeTab: 0,
      items: [
        { name: '盛岡城', image: moriokaImage },
        { name: '中尊寺', image: chuusonjiImage },
        { name: '大仙陵古墳', image: daisenryouImage },
        { name: '東大寺', image: toudaijiImage },
        { name: '奈良公園', image: naraparkImage },
        { name: '吉見百穴', image: yoshimiImage },
        { name: '白石城', image: shiroishiImage },
        { name: '高島城', image: takashimaImage },
        { name: '松本城', image: matsumotoImage }
      ]
    }
  }
}
</script>

<style>
img {
  width: 95%;
}

.nav-tabs {
  margin-left: 5%;
  margin-right: 5%;
}

.tab-content {
  margin-bottom: 50px;
}
</style>