<template>
  <navBar class="navbar">
    <div slot="left" class="go-back" @click="goBack">
      <img :src="backImg" alt="">
    </div>
    <div slot="center" class="title">购物车</div>
  </navBar>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
export default {
  name: 'CartNavbar',
  components: {
    navBar
  },
  data () {
    return {
      backImg: require('assets/img/common/back-white.svg')
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus">
.navbar
  background #ff5777
.title
  color white
.go-back
  text-align left
  margin-left .625rem
  img
    width 1.5rem
    height 1.5rem
    vertical-align middle
</style>
