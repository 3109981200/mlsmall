<!--详情页颜色、尺码选择组件-->
<template>
<div class="price">
  <el-drawer
    :visible.sync="showPriceDrawer"
    :direction="direction"
    size="60%"
    :before-close="handleClose">
    <div class="title" slot="title">
      <img :src="nowImg" alt="" class="title-img" v-if="isNowPrice">
      <img :src="skuInfo.img" alt="" class="title-img" v-else>
      <div class="title-price">
        <div class="title-price-text">
          <span class="title-price-ico">{{goods.currency}}</span>
          <div class="title-price-price" v-if="isNowPrice">{{nowPrice}}</div>
          <div class="title-price-price" v-else>{{currentPrice}}</div>
        </div>
        <div class="title-price-sku" v-if="isNowPrice">库存{{nowTotalStock}}件</div>
        <div class="title-price-sku" v-else>库存{{skuInfo.totalStock}}件</div>
        <div class="title-price-size" v-if="!styleActive||!sizeActive">请选择：<span v-show="!styleActive">颜色</span> <span v-show="!sizeActive">尺码</span></div>
        <div class="title-price-size" v-if="styleActive&&sizeActive">已选择：<span :class="{active: styleActive}">"{{style}} {{size}}"</span></div>
      </div>
    </div>
    <BScroll ref="scroll" class="content" :probeType="scrollProbeType" :scrollClick="scrollClick">
    <div class="color">
      <div class="color-title">{{skuInfo.props[0].label}}</div>
      <div class="color-item">
        <div :class="{active: styleActive && styleCurrentIndex===index}" v-for="(val, index) in skuInfo.props[0].list" :key="'color' + index" @click="colorItemClick(val, index)">{{val.name}}</div>
      </div>
    </div>
    <div class="size">
      <div class="size-title">{{skuInfo.props[1].label}}</div>
      <div class="size-item">
        <div :class="{active: sizeCurrentIndex===index && sizeActive}" v-for="(val, index) in skuInfo.props[1].list" :key="'size' + index" @click="sizeItemClick(val, index)">{{val.name}}</div>
      </div>
    </div>
    <div class="counter">
      <span>数量</span>
      <div class="box">
        <div class="decreased" @click="decreased">-</div>
        <div class="num">{{counter}}</div>
        <div class="increased" @click="increased">+</div>
      </div>
    </div>
    </BScroll>
    <div class="btn-bar">
      <div class="add-car" @click="addCart">
        <span>加入购物车</span>
      </div>
      <div class="buy-now" @click="addCart">
        <span>立即购买</span>
      </div>
    </div>
    <div class="message" v-if="showMessage" :class="{fadeOut: showFadeOut}">
      {{message}}
    </div>
  </el-drawer>
</div>
</template>

<script>
import BScroll from 'components/common/bscroll/BScroll'
export default {
  name: 'DetailsPriceDrawer',
  components: {
    BScroll
  },
  data () {
    return {
      scrollProbeType: 3,
      scrollClick: true,
      direction: 'btt',
      nowPrice: 0, // 选中规格商品的价格
      isNowPrice: false, // 显示选中规格商品的价格
      nowTotalStock: 0, // 选中规格商品的库存
      nowImg: '', // 选中规格的图片
      counter: 1,
      style: '颜色',
      styleId: '',
      size: '尺码',
      sizeId: '',
      styleActive: false, // 选中样式
      styleCurrentIndex: '', // 当前选中的索引
      sizeActive: false,
      sizeCurrentIndex: '',
      showFadeOut: false,
      showMessage: false,
      message: ''
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
    },
    shopInfo: {
      Type: Object,
      default () {
        return null
      }
    }
  },
  watch: {
    size (val) {
    //  console.log(val)
      this.getPrice()
    },
    style (val) {
    //  console.log(val)
      this.getPrice()
    }
  },
  created () {
    console.log(this.skuInfo)
    console.log(this.goods)
  },
  computed: {
    params () {
      return {
        goodsId: this.skuInfo.itemId,
        counter: this.counter,
        style: this.style,
        size: this.size,
        price: this.nowPrice,
        title: this.goods.title,
        desc: this.goods.desc,
        img: this.nowImg
      }
    },
    currentPrice () {
      return this.goods.highNowPrice ? this.goods.nowPrice + this.goods.priceSplit + this.goods.highNowPrice : this.goods.nowPrice
    }
  },
  methods: {
    colorItemClick (obj, index) {
      console.log(obj)
      if (this.styleCurrentIndex === index && this.style) {
        // 点击移除选中样式
        this.styleActive = !this.styleActive
        this.style = null
      } else {
        // 点击添加选中样式 获取选中内容
        this.styleCurrentIndex = index
        this.styleActive = true
        this.style = obj.name
        this.styleId = obj.styleId
      }
    },
    sizeItemClick (obj, index) {
      console.log(obj)
      if (this.sizeCurrentIndex === index && this.size) {
        this.sizeActive = !this.sizeActive
        this.size = null
      } else {
        this.sizeCurrentIndex = index
        this.sizeActive = true
        this.size = obj.name
        this.sizeId = obj.sizeId
      }
    },
    getPrice () {
      const skus = this.skuInfo.skus
      // console.log(skus)
      skus.forEach(item => {
        if (item.styleId === this.styleId && item.sizeId === this.sizeId) {
          this.nowPrice = (item.nowprice / 100).toFixed(2)
          this.nowTotalStock = item.stock
          this.nowImg = item.img
          // console.log(this.nowPrice)
          // console.log(this.nowTotalStock)
          this.isNowPrice = true
        }
      })
    },
    decreased () {
      if (this.counter <= 1) {
        // console.log('decreased')
        this.isMessage('至少购买一件哦！')
      } else {
        this.counter -= 1
      }
    },
    increased () {
      this.counter += 1
    },
    handleClose () {
      this.$emit('closePriceDrawer', false)
    },
    addCart (params) {
      params = this.params
      Object.assign(params, { shopInfo: this.shopInfo })
      if (params.style === '颜色' || !params.style) {
        this.isMessage('请选择颜色')
        return
      }
      if (params.size === '尺码' || !params.size) {
        this.isMessage('请选择尺码')
        return
      }
      console.log(params)
      this.$store.dispatch('addCart', this.params)
      this.$router.push('/cart/cartList')
    },
    isMessage (val) {
      this.message = val
      this.showMessage = true
      this.showFadeOut = true
      setTimeout(() => {
        this.showMessage = false
      }, 3000)
    }
  }
}
</script>

<style scoped lang="stylus">
.content
    position absolute
    top 120px
    bottom 49px
    left 0
    right 0
    overflow hidden
.price
  position relative
  >>> .el-drawer
    overflow visible
  >>> .el-drawer__header
    margin 0
    padding 20px 10px 8px
    background #FFF
    z-index 2
  >>> .el-drawer__close-btn
    position absolute
    top 10px
    right 10px
  .title
    position relative
    height 90px
    &-img
      width 96px
      max-height 160px
      background #FFF
      position absolute
      bottom 8px
      border-radius 3px
      box-shadow 0 1px 2px 0 rgba(0,0,0,.1)
      img
        width 100%
    &-price
      margin-left 106px
      color #000
      &-text
        display flex
      &-ico
        font-size 14px
        padding-top 5px
      &-price
        font-size 32px
      &-sku
        font-size 14px
        padding-bottom 5px
      &-size
        font-size 14px
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-line-clamp: 1
        -webkit-box-orient: vertical
        span
          font-size 12px
        .active
          color #ff5777
  .color
    padding 0 10px
    font-size .875rem
    color #666
    &-title
      padding 8px 0
    &-item
      display flex
      flex-wrap wrap
      div
        padding 5px 10px
        border 1px solid #999
        margin 0 10px 10px 0
        border-radius 3px
      .active
        color  #ff5777
        border 1px solid #ff5777!important
  .size
    padding 0 10px
    font-size 14px
    color #666
    &-title
      padding 8px 0
    &-item
      display flex
      flex-wrap wrap
      div
        padding 5px 10px
        border 1px solid #999
        margin 0 10px 10px 0
        border-radius 3px
      .active
        color  #ff5777
        border 1px solid #ff5777!important
  .counter
    padding 10px
    .box
      display flex
      border 1px solid #999
      border-radius 3px
      width 128px
      font-size 20px
      justify-content space-around
      text-align center
      margin 8px 0
      align-items center
    .num
      border-left 1px solid #999
      border-right  1px solid #999
      width 48px
      padding 5px 0
      font-size 16px
      line-height 23px
    .decreased
      width 32px
      padding 5px 0
    .increased
      width 32px
      padding 5px 0
      color #ff5777
  .btn-bar
    position absolute
    bottom 0
    left 0
    right 0
    height 49px
    box-shadow 0 -1px 1px rgba(50,50,50,.1)
    display flex
    align-items center
    text-align center
    div
      flex 1
      height 49px
      line-height 49px
    .add-car
      background #ffe6e8
      color #ff5777
    .buy-now
      background #ff5777
      color #FFF
  .message
    background rgba(0,0,0,.7)
    color #FFF
    position absolute
    top 50%
    left 50%
    text-align center
    transform translateX(-50%)
    z-index 2500
    padding 12px
    border-radius 5px
  @-webkit-keyframes fadeOut /*设置内容由显示变为隐藏*/
    0%
      opacity 1
    100%
      opacity 0
  .fadeOut
    -webkit-animation: fadeOut 3s ease
</style>
