<template>
  <navBar class="navbar">
    <div slot="left" class="go-back" @click="goBack">
      <img :src="backImg" alt="">
    </div>
    <div slot="center" class="title">购物车({{cartLength}})</div>
    <div slot="right" class="go-home" @click="goHome">
      <img :src="homeImg" alt="">
    </div>
  </navBar>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import { mapState } from 'vuex'
export default {
  name: 'CartNavbar',
  components: {
    navBar
  },
  data () {
    return {
      backImg: require('assets/img/common/back-white.svg'),
      homeImg: require('assets/img/common/home_white.svg')
    }
  },
  computed: {
    ...mapState({
      cartLength: state => state.cartList.length
    })
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    goHome () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped lang="stylus">
.navbar
  background #ff5777
  position relative
  z-index 10
.title
  color white
.go-back
  text-align left
  margin-left 10px
  img
    width 24px
    height 24px
    vertical-align middle
.go-home
  text-align right
  margin-right 10px
  img
    width 24px
    height 24px
    vertical-align middle
</style>
