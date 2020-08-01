<template>
  <NavBar class="rate-navbar">
    <div slot="left" class="go-back" @click="handleClick"><img :src="backImg" alt=""></div>
    <div slot="center">所有评价</div>
  </NavBar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'RateNavBar',
  data () {
    return {
      backImg: require('assets/img/common/back.svg')
    }
  },
  components: {
    NavBar
  },
  methods: {
    handleClick () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="stylus">
.rate-navbar
  position relative
  font-size 20px
  background #FFF
  z-index 99
  img
    width 24px
    height 24px
    vertical-align middle
  .go-back
    text-align left
    margin-left 10px
</style>
