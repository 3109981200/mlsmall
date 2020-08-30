<template>
  <div id="app">
    <tabBarIndex v-if="!showTab"/>
    <!--使用exclude排除不需要缓存的组件-->
    <keep-alive exclude="Details,RateList,ShopCart,HotSearch">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import tabBarIndex from 'components/content/tabbarindex/TabBarIndex'

export default {
  name: 'App',
  components: {
    tabBarIndex
  },
  data () {
    return {
      showTab: false
    }
  },
  methods: {
  },
  watch: {
    // 详情页不显示公共导航  通过监听路由实现
    $route (e) {
      if (e.path === '/details' || e.path === '/rate/list' || e.path === '/search' || e.path === '/category') {
        this.showTab = true
      } else {
        this.showTab = false
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import "assets/css/base.css";
</style>
