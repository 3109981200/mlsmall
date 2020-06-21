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
    padding 10px 5px
    display flex
    flex-wrap wrap
    .item
      width 33.33%
      padding 0 5px
      padding-bottom 10px
      img
        width 100%
      .title
        font-size 12px
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp:1
        margin 5px 0
    .price
      font-size 12px
</style>
