<template>
    <div class="navBar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style scoped lang="stylus">
.navBar
  display flex
  align-items center
  height 44px
  line-height 44px
  width 100%
  box-shadow 0 1px 1px rgba(50,50,50,.1);
/*  position fixed
  top 0
  left 0
  right 0*/
  .left, .right
    width 72px
  .center
    flex 1
    text-align center

</style>
