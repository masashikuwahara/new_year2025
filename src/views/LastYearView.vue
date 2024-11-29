<template>
  <div>
    <h1>昨年はこんなところへ行ってきました</h1>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
        <a class="nav-link" :class="{ active: activeTab === index }" @click="activeTab = index">{{ tab.name }}</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }">
        {{ tab.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
      tabs: [
        { name: '国内旅行', content: '北海道に行って来ました' },
        { name: '海外旅行', content: 'ハワイに行ってきました' }
      ]
    }
  }
}
</script>