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
    padding .625rem
    display flex
    font-size .875rem
    align-items center
    border-bottom .625rem solid rgba(214,214,214,0.361)
    .avatar
      margin-right .625rem
      img
        width 3.75rem
        height 3.75rem
    &-info
      width 100%
      .top
        display flex
        justify-content space-between
      .center
        padding .3125rem 0
        font-size .75rem
        img
          width .625rem
          height .625rem
          margin-right .3125rem
        span
          border-left 1px solid #ccc
          padding-left .625rem
          margin-left .3125rem
      .bottom
        span
          border 1px solid #ccc
          color #FF2255
          margin-right .3125rem
          border-radius .625rem
          padding 0 .3125rem
          font-size .75rem
  .arrow-right
    img
      width 1rem
      height 1rem
      vertical-align middle
</style>
