<template>
    <div class="rate" v-loading.fullscreen.lock="isLoading">
      <!--顶部导航-->
      <RateNavBar></RateNavBar>
      <BScroll ref="scroll" class="content" :probeType="scrollProbeType" :scrollClick="scrollClick" @scroll="contentScroll">
        <!--评论头部信息-->
        <RateListHead :averageScore="averageScore" :rateTags="rateTags" />
        <!--评论列表-->
        <div class="rate-list">
          <RateListItem v-for="(item, index) in rateList" :rate="item" :key="index"
              @imgLoaded="imgLoaded" @showItemSwiper="showItemSwiper"
          />
        </div>
      </BScroll>
      <!--图片点击预览切换-->
      <div class="show-swiper" v-if="showSwiper" @click="closeSwiper" @touchmove.prevent>
        <div class="img-mask"></div>
        <Swiper class="bigSwiper" :options="swiperOptions">
          <SwiperSlide v-for="(item, index) in swiperData" :key="'big' + index">
            <img :src="item" alt="">
          </SwiperSlide>
          <div class="swiper-pagination" slot="pagination"></div>
        </Swiper>
      </div>
      <BackTop :bacTopImg="backTopImgUrl" v-show="showBackTop" @click.native="backClick" />
    </div>
</template>

<script>
import { getRateList } from 'service/api'
import RateNavBar from './rateComps/RateNavBar'
import RateListHead from './rateComps/RateListHead'
import RateListItem from './rateComps/RateListItem'
import BScroll from 'components/common/bscroll/BScroll'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { backTopMixin } from 'common/mixins'

export default {
  name: 'RateList',
  data () {
    return {
      isLoading: false,
      goodsId: '', // 商品ID
      averageScore: 0, // 综合评分
      bottomText: '', // 底部文字
      rateTags: [], // 评论标签
      rateList: [], // 评论列表
      scrollProbeType: 3,
      scrollClick: true,
      showSwiper: false, // 显示swiper
      swiperData: [], // 当前评论的图片数组
      swiperOptions: { // swiper参数
        zoom: true,
        width: window.innerWidth,
        initialSlide: 0, // 当前显示图片
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  components: {
    BScroll,
    RateNavBar,
    RateListHead,
    RateListItem,
    Swiper,
    SwiperSlide
  },
  mixins: [backTopMixin],
  created () {
    this.goodsId = this.$route.query.itemId
    this.getRates()
    // console.log(this.$route)
  },
  methods: {
    // 遍历结果获取当前goodsID下的评论内容
    getRates () {
      this.isLoading = true
      getRateList().then(res => {
        // console.log(res)
        const results = res.list
        // 遍历获取所有商品评论
        results.map(item => {
          // 遍历单个商品的评论 查询商品ID
          item.data.list.map(val => {
            if (val.itemId === this.goodsId) {
              // 获取当前商品的评论
              this.rateList.push(val)
              // 评论分数 标签 底部文字
              this.averageScore = item.data.averageScore
              this.bottomText = item.data.bottomText
              this.rateTags = item.data.rateTags
            }
          })
        })
        //    console.log(this.rateList)
        //    console.log(this.rateTags)
        this.isLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    imgLoaded () {
      this.$refs.scroll.refresh()
    },
    // 点击显示大图轮播切换
    showItemSwiper (index, images, show) {
      this.showSwiper = show
      this.swiperData = images
      this.swiperOptions.initialSlide = index
      this.$refs.scroll.refresh()
    },
    // 点击关闭大图轮播切换
    closeSwiper () {
      this.showSwiper = false
      this.$refs.scroll.refresh()
    },
    contentScroll (position) {
      this.showBackTop = (-position.y) > 1000
    }
  }
}
</script>

<style scoped lang="stylus">
.rate
  position relative
  height 100vh
  .content
    position absolute
    top 44px
    bottom 0
    left 0
    right 0
  .show-swiper
    position fixed
    left 0
    top 0
    bottom 0
    right 0
    z-index 99
    display flex
    align-items center
    .img-mask
      position absolute
      top 0
      right 0
      left 0
      bottom 0
      z-index 1
      background-color: rgba(0,0,0,.5)
    .bigSwiper
      width 100%
      max-height 80%
      position relative
      overflow hidden
      >>> .swiper-wrapper
         align-items center
      img
        width 100%
      .swiper-pagination
        color #fff
        position absolute
        right 20px
        left auto
        bottom 20px
        width auto
        padding 3 15px
        background rgba(0,0,0,.5)
        border-radius 15px
</style>
