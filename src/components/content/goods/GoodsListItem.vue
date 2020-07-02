<template>
    <div class="goods-item" @click="itemClick()">
        <img :src="goodsItem.img" alt="" @load="imgLoad">
      <div class="goods-info">
          <p>{{goodsItem.title}}</p>
          <p><span class="price">￥{{goodsItem.price}}</span> <span class="cfav">{{goodsItem.cfav}}</span></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      Type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    // 监听图片加载完成 通过事件总线的方式 $bus.$emit 发送事件， $bus.$on接收事件
    imgLoad () {
      this.$bus.$emit('itemImgLoad')
    },
    itemClick () {
      this.$router.push({
        path: '/details',
        query: {
          id: this.goodsItem.iid
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .goods-item
    flex 0 0 50%
    padding .25rem
    img
      width 100%
      border-radius 2%
  .goods-info
    padding-top .3125rem
    p
      font-size .8125rem
      overflow hidden
      text-overflow ellipsis
      -webkit-line-clamp 2
      word-break break-all
      display -webkit-box
      -webkit-box-orient vertical
      line-height 1rem
      margin-bottom .3125rem
    .price
      font-family Arial Black
      font-weight 700
      font-size .875rem
      color #ff5777
    .cfav
      font-size .75rem
      float right
      &:before
        content ''
        display block
        position absolute
        margin-left -1rem
        width .875rem
        height .875rem
        background url("~assets/img/common/cfav.svg") no-repeat
        background-size 100%
        z-index -999
</style>
