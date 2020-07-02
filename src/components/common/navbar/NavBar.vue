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
  height 2.75rem
  line-height 2.75rem
  width 100%
  box-shadow 0 1px 1px rgba(50,50,50,.1);
  .left, .right
    width 4.5rem
    text-align center
  .center
    flex 1
    text-align center
</style>
