<template>
    <div class="back-top">
      <img :src="bacTopImg" alt="">
    </div>
</template>

<script>
export default {
  name: 'BackTop',
  props: {
    bacTopImg: {
      Type: String
    }
  }
}
</script>

<style scoped lang="stylus">
.back-top
  position fixed
  right 10px
  bottom 54px
  img
    width 40px
    height 40px
    border-radius 100%
    background #FFF
    padding 8px
</style>
