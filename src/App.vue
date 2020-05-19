<template>
  <div id="app">
    <router-view/>
    <tabBarIndex/>
  </div>
</template>

<script>
import tabBarIndex from 'components/content/tabbarIndex/tabBarIndex'
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
