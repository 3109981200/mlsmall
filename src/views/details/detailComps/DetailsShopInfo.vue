<!--详情页店铺信息组件-->
<template>
  <div class="shop">
    <div class="avatar"><img :src="shopInfo.logo" alt=""></div>
    <div class="shop-info">
      <div class="top">
        <div class="top-head">{{shopInfo.name}}</div>
        <div class="arrow-right">进店 <img :src="arrowRight" alt=""></div>
      </div>
      <div class="center">
        <img :src="star" alt="" v-for="index in shopInfo.level" :key="index">
        <span>{{shopInfo.saleDesc}}</span>
      </div>
      <div class="bottom">
        <span v-for="(item, index) in shopInfo.labels" :key="index">{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  data () {
    return {
      star: require('assets/img/common/star.png'),
      arrowRight: require('assets/img/common/arrow-right.svg')
    }
  },
  props: {
    shopInfo: {
      Type: Object,
      default: {}
    }
  }
}
</script>

<style scoped lang="stylus">
  .shop
    padding 10px
    display flex
    font-size 14px
    align-items center
    border-bottom 10px solid #f6f6f6
    .avatar
      margin-right 10px
      img
        width 60px
        height 60px
    &-info
      width 100%
      .top
        display flex
        justify-content space-between
      .center
        padding 5px 0
        font-size 12px
        img
          width 10px
          height 10px
          margin-right 5px
        span
          border-left 1px solid #ccc
          padding-left 10px
          margin-left 5px
      .bottom
        span
          border 1px solid #ccc
          color #FF2255
          margin-right 5px
          border-radius 10px
          padding 0 5px
          font-size 12px
  .arrow-right
    img
      width 16px
      height 16px
      vertical-align middle
</style>
