<!--详情页颜色、尺码选择组件-->
<template>
<div class="price">
  <el-drawer
    :visible.sync="showPriceDrawer"
    :direction="direction"
    :before-close="handleClose">
    <div class="title" slot="title">
      <img :src="skuInfo.img" alt="" class="title-img">
      <div class="title-price">
        <div class="title-price-text">
          <span class="title-price-ico">{{goods.currency}}</span>
          <div class="title-price-price" v-if="goods.highNowPrice">
            {{goods.nowPrice}} {{goods.priceSplit}} {{goods.highNowPrice}}
          </div>
          <div class="title-price-price" v-else>{{goods.nowPrice}}</div>
        </div>
        <div class="title-price-sku">库存{{skuInfo.totalStock}}件</div>
        <div class="title-price-size">请选择：{{skuInfo.styleKey}} {{skuInfo.sizeKey}}
        </div>
      </div>
    </div>
    <div class="color" v-for="(item, index) in skuInfo.props" :key="index">
      <div class="color-title">{{item.label}}</div>
      <div class="color-item">
        <div v-for="(val, index) in item.list" :key="'color' + index">{{val.name}}</div>
      </div>
    </div>
    <div class="counter">
      <span>数量</span>
      <div class="box">
        <div class="decreased">-</div>
        <div class="num">{{number}}</div>
        <div class="increased">+</div>
      </div>
    </div>
    <div class="btn-bar">
      <div class="add-car">
        <span>加入购物车</span>
      </div>
      <div class="buy-now">
        <span>立即购买</span>
      </div>
    </div>
  </el-drawer>
</div>
</template>

<script>
export default {
  name: 'DetailsPriceDrawer',
  data () {
    return {
      direction: 'btt',
      nowPrice: 0,
      number: 0
    }
  },
  props: {
    showPriceDrawer: {
      Type: Boolean,
      default: false
    },
    skuInfo: {
      Type: Object,
      default () {
        return null
      }
    },
    goods: {
      Type: Object,
      default () {
        return null
      }
    }
  },
  watch: {

  },
  created () {
    console.log(this.skuInfo)
  },
  methods: {
    handleClose () {
      this.$emit('closePriceDrawer', false)
    }
  }
}
</script>

<style scoped lang="stylus">
.price
  >>> .el-drawer
    height auto!important
    overflow visible
  >>> .el-drawer__header
    margin 0
    padding 1.25rem .625rem
  >>> .el-drawer__close-btn
    position absolute
    top .625rem
    right .625rem
  .title
    position relative
    height 5rem
    &-img
      width 6rem
      max-height 10rem
      background #FFF
      position absolute
      bottom .5rem
      border-radius .2rem
      box-shadow 0 0.08rem 0.16rem 0 rgba(0,0,0,.1)
      img
        width 100%
    &-price
      margin-left 6.625rem
      color #000
      &-text
        display flex
      &-ico
        font-size .875rem
        padding-top .3125rem
      &-price
        font-size 2rem
      &-sku
        font-size .875rem
        padding-bottom .3125rem
      &-size
        font-size .875rem

  .color
    padding 0 .625rem
    font-size .875rem
    color #666
    &-title
      padding .5rem 0
    &-item
      display flex
      flex-wrap wrap
      div
        padding .3rem .625rem
        border 1px solid #999
        margin 0 .625rem .625rem 0
        border-radius .2rem
  .counter
    padding .625rem
    .box
      display flex
      border 1px solid #999
      border-radius .2rem
      width 8rem
      font-size 1.25rem
      justify-content space-around
      text-align center
      margin .5rem 0
      align-items center
    .num
      border-left 1px solid #999
      border-right  1px solid #999
      width 3rem
      padding .3125rem 0
      font-size 1rem
      line-height 1.45rem
    .decreased
      width 2rem
      padding .3125rem 0
    .increased
      width 2rem
      padding .3125rem 0
      color #ff5777
  .btn-bar
    height 3.0625rem
    box-shadow 0 -1px 1px rgba(50,50,50,.1)
    display flex
    align-items center
    text-align center
    div
      flex 1
      height 3.0625rem
      line-height 3.0625rem
    .add-car
      background #ffe6e8
      color #ff5777
    .buy-now
      background #ff5777
      color #FFF
</style>
