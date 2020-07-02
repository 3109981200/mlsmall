<!--详情页商品基本信息组件-->
<template>
  <div>
    <div class="goodsInfo" v-if="Object.keys(goods).length !== 0">
      <!--商品价格-->
      <div class="price">
        <div class="price-now">
          <div class="price-unit">{{goods.currency}}</div>
          <div class="price-price" v-if="goods.highNowPrice">
            {{goods.nowPrice}} {{goods.priceSplit}} {{goods.highNowPrice}}
          </div>
          <div class="price-price" v-else>{{goods.nowPrice}}</div>
        </div>
        <div class="price-old">
          <span class="price-old-price">{{goods.currency}}{{goods.oldPrice}}</span>
          <div class="price-old-tags">{{goods.priceTags}}</div>
        </div>
      </div>
      <!--标题描述-->
      <div class="title-info">
        <div class="title">{{goods.title}}</div>
        <a class="help" v-if="goods.pickforme"><img :src="goods.pickforme.icon" alt="">{{goods.pickforme.name}}</a>
      </div>
      <!--地址邮费-->
      <div class="express-address">
        <span class="express">{{goods.express}}</span>
        <span class="address">{{goods.address}}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'GoodsBaseInfo',
  data () {
    return {

    }
  },
  props: {
    goods: {
      Type: Object,
      default: {}
    }
  },
  components: {
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">
  .goodsInfo
    padding .625rem
    border-bottom .625rem solid rgba(214,214,214,0.361)
    .price
      display flex
      padding-bottom .625rem
    .price-now
      display flex
      margin-right .625rem
    .price-price
      font-size 1.875rem
      color #000
      line-height 1.875rem
    .price-unit
      line-height 1.375rem
      font-size: .875rem
    .price-old-price
      color #999
      text-decoration line-through
      font-size .75rem
    .price-old-tags
      color rgb(255, 34, 85)
      background-color rgb(255, 232, 238)
      font-size .8125rem
      text-align center
      padding 0 .3125rem
    .title-info
      display flex
      padding-bottom .625rem
    .title
      font-size .875rem
      color #666
      line-height 1.25rem
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      margin-right 5rem
    .help
      background #f8f8f8
      color #999
      position absolute
      right 0
      margin-top .625rem
      font-size .8125rem
      padding .3125rem .625rem
      border-top-left-radius 1.25rem
      border-bottom-left-radius 1.25rem
      img
        width .8125rem
        height .8125rem
    .express-address
      color #999
      font-size .625rem
      display flex
      justify-content space-between
</style>
