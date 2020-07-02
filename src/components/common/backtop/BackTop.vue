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
  right .625rem
  bottom 3.375rem
  img
    width 2.5rem
    height 2.5rem
    border-radius 100%
    background #FFF
    padding .5rem
</style>
