<template>
    <div id="home">
      <NavBar class="nav-home"><div slot="center">购物街</div></NavBar>
      <Tabs :titles="tabsTitles" @tabsClick="tabsClick" ref="tabs1" v-show="isFixed" class="fixed"/>
      <BScroll class="content" ref="scroll"
               :probeType="scrollProbeType"
               @scroll="contentScroll"
               @pullingUp="loadMore"
               :pullUpLoad="scrollPullUpLoad"
               :scrollClick="scrollClick"
      >
        <BannerSwiper :bannerImg="bannerImg" @swiperImgLoad="swiperImgLoad"/>
        <BannerAds :adsData="adsData"></BannerAds>
        <BannerRecommend :recommendData="recommend" class="banner-recommend"/>
        <Tabs :titles="tabsTitles" @tabsClick="tabsClick" ref="tabs2"/>
        <GoodsList :goods="showGoods"></GoodsList>
      </BScroll>
      <BackTop :bacTopImg="backTopImgUrl" v-show="showBackTop" @click.native="backClick"></BackTop>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Tabs from 'components/common/tabs/Tabs'
import BScroll from 'components/common/bscroll/BScroll'
import BannerAds from './homeComps/BannerAds'
import BackTop from 'components/common/backtop/BackTop'
import GoodsList from 'components/content/goods/GoodsList'
/* import Axios from 'axios' */

import BannerSwiper from './homeComps/BannerSwiper'
import BannerRecommend from './homeComps/BannerRecommend'

import { getHomeMultidata, getGoods } from 'service/api'
import { debounce } from 'common/untis'

export default {
  name: 'Home',
  components: {
    NavBar,
    BannerSwiper,
    BannerRecommend,
    BannerAds,
    Tabs,
    GoodsList,
    BScroll,
    BackTop
  },
  data () {
    return {
      bannerImg: [],
      recommend: [],
      tabsTitles: ['流行', '新款', '精选'],
      adsData: [],
      goods: {
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] }
      },
      /* 模拟分页请求数据 */
      pop: { pageIndex: 0, pageSize: 40 },
      sell: { pageIndex: 0, pageSize: 40 },
      new: { pageIndex: 0, pageSize: 40 },
      currentGoodsType: 'pop',
      backTopImgUrl: require('assets/img/common/back-top.svg'),
      showBackTop: false, // 返回顶部
      /* better-scroll参数 */
      scrollProbeType: 3,
      scrollPullUpLoad: true,
      scrollClick: true,
      tabsOffsetTop: 0, // tabs偏移量
      isFixed: false, // tabs吸顶
      positionY: 0 // 记录离开时的位置
    }
  },
  mounted () {
    // 监听图片加载完成刷新scroll重新计算滚动高度 200毫秒内刷新一次 防抖
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on('itemImgLoad', () => {
      refresh()
    })
  },
  activated () {
    // console.log('进入')
    this.$refs.scroll.scrollTo(0, this.positionY, 0) // 调用scroll的scrollTo方法滚动到离开前的位置
    this.$refs.scroll.refresh() // 刷新一次scroll
  },
  deactivated () {
    // console.log('离开')
    this.positionY = this.$refs.scroll.scroll.y // 获取离开时Y的位置
    // console.log(this.positionY)
  },
  created () {
    this.getHomeData()
    this.getHomeGoods('pop')
    this.getHomeGoods('sell')
    this.getHomeGoods('new')
  },
  computed: {
    showGoods () {
      return this.goods[this.currentGoodsType].list
    }
  },
  methods: {
    tabsClick (index) {
      //  console.log(index)
      switch (index) {
        case 0:
          this.currentGoodsType = 'pop'
          break
        case 1:
          this.currentGoodsType = 'new'
          break
        case 2:
          this.currentGoodsType = 'sell'
      }
      this.$refs.tabs1.currentIndex = index
      this.$refs.tabs2.currentIndex = index
      this.$refs.scroll.scrollTo(0, -this.tabsOffsetTop)
    },
    swiperImgLoad () {
    //  console.log('swiperImgLoad')
      // 监听tabs距离顶部的偏移高度
      this.tabsOffsetTop = this.$refs.tabs2.$el.offsetTop
    //  console.log(this.tabsOffsetTop)
    },
    contentScroll (position) {
      this.showBackTop = (-position.y) > 1000
      this.isFixed = (-position.y) > this.tabsOffsetTop
    },
    backClick () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    loadMore () {
      // console.log('上拉加载更多')
      this.getHomeGoods(this.currentGoodsType)
    },
    getHomeData () {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.bannerImg = res.data.banner.list || []
        this.recommend = res.data.recommend.list || []
        this.adsData = res.data.ads.list || []
        // console.log(this.bannerImg)
        // console.log(this.recommend)
      }).catch(err => {
        console.log(err)
      })
    },
    getHomeGoods (Type) {
      // console.log(Type)
      getGoods().then(res => {
        // console.log(res)
        this.goods[Type].list.push(...res[Type].list.slice(this[Type].pageIndex, this[Type].pageSize + this[Type].pageIndex) || [])
        // console.log(this.goods[Type])
        this[Type].pageIndex += 40
        this.$refs.scroll.finishPullUp() // 载数据加载完毕后，需要执行 finishPullUp
      }).catch(err => {
        console.log(err)
      })
    }
    /*   api 请求数据
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      }).catch(err =>{

      })
    } */
  }
}
</script>

<style scoped lang="stylus">
#home
/*  padding-top 44px*/
  position relative
  height 100vh
.content
  position absolute
  top 2.75rem
  bottom 3.0625rem
  left 0
  right 0
.nav-home
  position relative
  z-index 9
  background #ff5777
  color #FFF
.banner-recommend
  flex-wrap wrap
  border-bottom 10px solid #d6d6d65c
.fixed
  position relative
  z-index 9
</style>
