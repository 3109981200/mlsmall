<template>
  <div class="recommend-item">
    <div class="rec-img"><slot name="rec-img"></slot></div>
    <div class="text"><slot name="rec-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'RecommendItem'
}
</script>

<style scoped lang="stylus">
  .recommend-item
    flex 1
    text-align center
  .rec-img
    img
      width 80px
  .text
    font-size 14px
</style>
