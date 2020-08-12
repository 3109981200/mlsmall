<template>
  <div class="block-info-item">
    <div class="head" v-if="blockInfo.showHeader">
      <div class="title">{{blockInfo.title}}</div>
      <div class="more" v-if="blockInfo.subTitle">{{blockInfo.subTitle}}
        <Arrow-Right/>
      </div>
    </div>
    <div class="content-cart" v-if="blockInfo.layoutType == 1">
      <div class="content-cart-left">
        <div class="content-cart-left-text">{{blockInfo.itemListInfo[0].title}}</div>
        <div class="content-cart-left-ico"><img :src="blockInfo.itemListInfo[0].iconUrl" alt=""></div>
      </div>
      <div class="content-cart-right">
        <div class="content-cart-right-text bord">
          <div>{{blockInfo.itemListInfo[1].title}}</div>
          <div><Arrow-Right/></div>
        </div>
        <div class="content-cart-right-text bord">
          <div>{{blockInfo.itemListInfo[2].title}}</div>
          <div class="sub-title">{{blockInfo.itemListInfo[2].subTitle}}</div>
        </div>
        <div class="content-cart-right-text">
          <div>{{blockInfo.itemListInfo[3].title}}</div>
          <div class="sub-title">{{blockInfo.itemListInfo[3].subTitle}}</div>
        </div>
      </div>
    </div>
    <div class="content" v-else>
      <div class="content-item" v-for="(item, index) in blockInfo.itemListInfo" :key="index + 'home'">
        <div class="content-item-ico"><img :src="item.iconUrl" alt=""></div>
        <div class="content-item-text">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { arrowRightMixin } from 'common/mixins'
export default {
  name: 'ProfileBlockInfoItem',
  data () {
    return {}
  },
  props: {
    blockInfo: {
      Type: Object,
      default () {
        return {}
      }
    }
  },
  mixins: [arrowRightMixin]
}
</script>

<style scoped lang="stylus">
.block-info-item
  background #FFF
  border-radius 8px
  margin-bottom 10px
  padding 0 10px
  .head
    display flex
    justify-content space-between
    border-bottom 1px solid #e5e5e5
    padding 10px 0
    font-size 13px
    align-items center
    line-height 16px
  .more
    display flex
  .content
    display flex
    justify-content space-between
    padding 10px 0
    &-item
      text-align center
      font-size 12px
      &-ico
        padding-bottom 5px
        img
          width 28px
          height 28px
          vertical-align middle
.block-info-item-top
  .content
    justify-content flex-start
    &-item
      padding-right 30px
.block-info-item-cart
  background none
  padding 0
  .content-cart
    display flex
    flex-flow row nowrap
    justify-content space-between
    font-size 13px
    &-left
      padding 10px
      background #FFF
      border-radius 8px
      width 49%
      &-ico
        text-align right
        img
          width 120px
          vertical-align bottom
    &-right
      width 49%
      padding 10px
      background #FFF
      border-radius 8px
      .bord
        border-bottom 1px solid #e5e5e5
      &-text
        padding 10px 0
        display flex
        justify-content space-between
        .sub-title
          color #a8a8a8
</style>
