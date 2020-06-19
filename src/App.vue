<template>
  <div id="app">
    <tabBarIndex/>
    <!--使用exclude排除不需要缓存的组件-->
    <keep-alive exclude="Details">
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
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">
@import "assets/css/base.css";

</style>
