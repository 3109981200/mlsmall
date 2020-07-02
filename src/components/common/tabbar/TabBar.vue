<template>
    <div class="tabBar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'tabBar'
}
</script>

<style scoped lang="stylus">
.tabBar
  display flex
  align-items center
  height 3.0625rem
  background #f6f6f6
  position fixed
  bottom 0
  left 0
  right 0
  box-shadow 0 -1px 1px rgba(50,50,50,.1);
  font-size .75rem
  z-index 10
</style>
