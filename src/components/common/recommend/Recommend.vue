<template>
  <div class="recommend">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style scoped lang="stylus">
  .recommend
    display flex
    padding 20px 0
</style>
