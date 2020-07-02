<template>
  <div class="goods-recommend">
    <div class="item" v-for="(item,index) in recommends" :key="index">
      <img :src="item.image" alt="">
      <div class="title">{{item.title}}</div>
      <div class="price">￥{{item.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendGoods',
  props: {
    recommends: {
      Type: Array,
      default: []
    }
  }
}
</script>

<style scoped lang="stylus">
  .goods-recommend
    padding .625rem .3125rem
    display flex
    flex-wrap wrap
    .item
      width 33.33%
      padding 0 .3125rem
      padding-bottom 10px
      img
        width 100%
      .title
        font-size .75rem
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp:1
        margin .3125rem 0
    .price
      font-size .75rem
</style>
