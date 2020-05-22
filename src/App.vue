<template>
  <div id="app">
    <tabBarIndex/>
    <router-view/>
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
