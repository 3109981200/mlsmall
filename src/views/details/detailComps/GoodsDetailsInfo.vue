<template>
  <div class="detail">
    <!--文字描述-->
    <div class="desc">
      <div class="lineBar"><i class="dot"></i></div>
      <div class="desc-text">{{goodsParams.desc}}</div>
      <div class="lineBar right"><i class="dot"></i></div>
    </div>
    <div class="imgBox" v-if="Object.keys(goodsParams.detailImages).length !== 0">
      <div v-for="(item, index) in goodsParams.detailImages" :key="index">
        <div class="desc">{{item.key}}</div>
        <div class="detail-img">
          <img :src="val" alt="" v-for="(val, index) in item.list" :key="'img'+ index">
        </div>
      </div>
    </div>
    <div class="size" v-if="Object.keys(goodsParams.sizeInfo).length !== 0">
      <div class="row" v-for="(item, index) in goodsParams.sizeInfo.tables[0]" :key="index" :class="{nbg: index===0}">
        <div class="col" v-for="(val,index) in item" :key="index" :class="{nbg: index===0}">{{val}}</div>
      </div>
      <div class="row" v-for="(value, key, index) in goodsParams.style.set" :key="'info-'+ index">
        <div class="info-head nbg">{{key}}</div>
        <div class="info-end">{{value}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsDetailsInfo',
  props: {
    goodsParams: {
      Type: Object,
      default: {}
    }
  }
}
</script>

<style scoped lang="stylus">
  .detail
    padding 10px 0
    .desc
      padding 20px 10px
      &-text
        font-size 14px
        color #727272
        padding 10px 0
        line-height 20px
      .lineBar
        width 100px
        height 1px
        background #666
        position relative
      .dot
        width 5px
        height 5px
        background #2e2e2e
        border-radius 100%
        display inline-block
        position absolute
        top -2px
      .right
        float right
        .dot
          position absolute
          top -2px
          right 0
    .imgBox
      padding-top 10px
      .desc
        padding 10px
        font-size 14px
    &-img
      img
        width 100%
    .size
      padding 20px 10px
      .row
        display flex
        border-bottom 1px solid #eee
        padding 10px 0
        font-size 14px
        color #ff5777
      .col
        width 25%
      .nbg
        color #999
      .info-head
        width 25%
      .info-end
        width 75%
</style>
