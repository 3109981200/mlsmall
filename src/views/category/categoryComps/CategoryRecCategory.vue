<template>
  <div class="content-top">
    <div class="content-top-item" v-for="(item, index) in recData" :key="index">
      <img :src="item.image" alt="" @load="imgLoad">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryRecCategory',
  props: {
    recData: {
      Type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    imgLoad () {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped lang="stylus">
.content-top
  display flex
  flex-wrap wrap
  width 100%
  padding 20px 10px 10px
  &-item
    text-align center
    margin 10px 0
    flex 0 0 33.3%
    font-size 12px
    img
      width 60px
      height auto
    p
      padding-top 10px
</style>
