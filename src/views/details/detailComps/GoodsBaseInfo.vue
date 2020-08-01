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
    padding 10px
    border-bottom 10px solid rgba(214,214,214,0.361)
    .price
      display flex
      padding-bottom 10px
    .price-now
      display flex
      margin-right 10px
    .price-price
      font-size 30px
      color #000
      line-height 30px
    .price-unit
      line-height 22px
      font-size: 14px
    .price-old-price
      color #999
      text-decoration line-through
      font-size 12px
    .price-old-tags
      color rgb(255, 34, 85)
      background-color rgb(255, 232, 238)
      font-size 13px
      text-align center
      padding 0 5px
    .title-info
      display flex
      padding-bottom 10px
    .title
      font-size 14p
      color #666
      line-height 20px
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      margin-right 80px
    .help
      background #f8f8f8
      color #999
      position absolute
      right 0
      margin-top 10px
      font-size 13px
      padding 5px 10px
      border-top-left-radius 20px
      border-bottom-left-radius 20px
      img
        width 13px
        height 13px
    .express-address
      color #999
      font-size 10px
      display flex
      justify-content space-between
</style>
