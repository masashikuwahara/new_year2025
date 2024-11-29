<template>
  <div>
    <h1>昨年はこんなところへ行ってきました</h1>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(item, index) in items" :key="index">
        <a class="nav-link" :class="{ active: activeTab === index }" @click="activeTab = index">{{ item.name }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" v-for="(item, index) in items" :key="index" :class="{ active: activeTab === index }">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      items: [
        { name: '盛岡城', content: '盛岡城' },
        { name: '中尊寺', content: '中尊寺' },
        { name: '大仙陵古墳', content: '大仙陵古墳' },
        { name: '東大寺', content: '東大寺' },
        { name: '奈良公園', content: '奈良公園' },
        { name: '吉見百穴', content: '吉見百穴' },
        { name: '白石城', content: '白石城' },
        { name: '高島城', content: '高島城' },
        { name: '松本城', content: '松本城' }
      ]
    }
  }
}
</script>