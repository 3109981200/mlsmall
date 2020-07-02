<template>
  <div class="rate-list-item">
    <!--用户信息-->
    <div class="rate-list-item-user">
      <div class="avatar"><img :src="rate.user.avatar" alt=""></div>
      <div class="title">
        <div class="username">{{rate.user.uname}}</div>
        <div class="info">
          <div class="info-size" v-if="rate.sizeInfo">
            <span class="desc">{{rate.sizeInfo.desc}}</span> |  <span>{{rate.sizeInfo.height}}</span> <span>{{rate.sizeInfo.weight}}</span>
          </div>
          <div class="info-style">{{rate.style}}</div>
        </div>
      </div>
    </div>
    <!--评论内容-->
    <div class="rate-list-item-content">
      <div class="tags" v-if="rate.rateTagNames">{{rate.rateTagNames}}</div>
      <div class="content">{{rate.content}}</div>
      <div class="img" v-if="rate.images.length > 0">
        <div class="img-item" v-for="(item, index) in rate.images" :key="'img' + index"
             :class="{widthLong : isWidth, heightLong: isHeight}"
              @click="itemImgClick(index,rate.images)">
           <img :src="item" alt="" @load="imgLoad">
        </div>
      </div>
    </div>
    <!--商家回复-->
    <div class="rate-list-item-append" v-if="rate.explain">
      <p :class="{noexpend: isShowAppend}">
        <span>商家回复：</span>
        {{rate.explain}}
      </p>
      <p class="moreBtn" v-if="isShowAppend" @click="showAppend=isShowAppend">展开<i class="show"></i></p>
      <p class="moreBtn" v-else @click="showAppend=isShowAppend">收起<i class="hide"></i></p>
    </div>
    <!--日期-->
    <div class="rate-list-item-date">
      <div class="date">{{rate.time}}</div>
      <div class="btn"><i class="useful"></i> 有用</div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'RateListItem',
  data () {
    return {
      isWidth: false,
      isHeight: false,
      showSwiper: true,
      showAppend: false
    }
  },
  props: {
    rate: {
      Type: Object,
      default: null
    }
  },
  computed: {
    isShowAppend () {
      return !this.showAppend
    }
  },
  created () {
    // console.log(this.rate)
  },
  methods: {
    imgLoad (event) {
      // console.log('imgLoad')
      this.$emit('imgLoaded') // 刷新bscroll
      // 根据图片宽高比例选择对应的样式 正方形显示
      const ratio = event.target.width / event.target.height
      if (ratio >= 1) {
        this.isWidth = true
      } else {
        this.isHeight = true
      }
    },
    /**
     * 点击显示大图切换 因为better-scroll会导致定位失效，
     * 所以将显示大图切换内容放至better-scroll外层，
     * 即RateListItem的父组件RateList里面，此处传值给父组件进行显示并传递数据
     * @param images 要显示的图片数据  currentIndex 当前点击的图片索引 this.showSwiper显示开关
     */
    itemImgClick (currentIndex, images) {
      this.$emit('showItemSwiper', currentIndex, images, this.showSwiper)
    }
  }
}
</script>

<style scoped lang="stylus">
.rate-list-item
  border-bottom .625rem solid rgba(214,214,214,0.361)
  padding .625rem
  &-user
    display flex
    justify-content flex-start
    padding-bottom .625rem
    .avatar
      img
        width 2.5rem
        height 2.5rem
        border-radius 100%
        vertical-align middle
    .title
      margin-left .625rem
      .username
        font-size .875rem
        line-height 1.25rem
      .info
        display flex
        font-size .8125rem
        line-height 1.5rem
        color #999
        &-size
          margin-right  .3125rem
          .desc
            color #ff5777
  &-content
    .tags
      font-size .8125rem
      color #999
      padding-bottom .625rem
      line-height 1.25rem
    .content
      font-size .8125rem
      line-height 1.25rem
      padding-bottom .625rem
    .img
      display flex
      flex-wrap wrap
      margin 0 -1%
      padding-bottom .625rem
      &-item
        flex 0 0 32%
        height 0
        padding-bottom 32%
        position relative
        overflow hidden
        margin 0 0 1% 1%
    .heightLong
          img
            width 100%
            height auto
            position absolute
            left 0
            top 50%
            transform translateY(-50%)
            -webkit-transform translateY(-50%)
            vertical-align middle
    .widthLong
          img
            width auto
            height 100%
            position absolute
            left 50%
            top 0
            transform translateX(-50%)
            -webkit-transform translateX(-50%)
            vertical-align middle
  &-append
    background #f4f4f4
    padding .625rem
    font-size .8125rem
    line-height 1.25rem
    border-radius .625rem
    margin-bottom .625rem
    position relative
    &:before
      content ''
      border: .5rem solid transparent
      border-bottom-color: #f4f4f4
      top: -1rem
      left: 1.25rem
      position absolute
    .noexpend
      overflow hidden
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 3
      -webkit-box-orient vertical
    .moreBtn
      margin-top .3125rem
      font-size .75rem
      align-items center
      display flex
      justify-content flex-end
      color #1296db
    i
      background-size cover
      width 1rem
      height 1rem
      margin-left 0.1rem
    .show
      background-image url("~assets/img/common/show.svg")
    .hide
      background-image url("~assets/img/common/hide.svg")
    span
      font-weight bold
  &-date
    display flex
    justify-content space-between
    font-size .875rem
    color #999999
    align-items center
    .btn
      border 1px solid rgb(214,214,214)
      border-radius 1.25rem
      padding .3125rem .625rem
      display flex
      align-items center
    .useful
      background-image url("~assets/img/common/useful.svg")
      background-size cover
      width .9375rem
      height .9375rem
      display block
</style>
