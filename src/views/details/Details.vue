<template>
 <div class="details">
   <!--详情页头部导航-->
   <DetailsNavBar ref="navBar" class="nav-details" @itemClick="navBarItemClick"></DetailsNavBar>
   <BScroll ref="scroll" class="content" :probeType="scrollProbeType" :scrollClick="scrollClick" @scroll="contentScroll">
     <div v-if="detail">
       <!--头部轮播-->
       <DetailsSwiper ref="banner" :bannerImg="topImages" @bannerImgLoaded="bannerImgLoaded"></DetailsSwiper>
       <!--基本信息-->
       <GoodsBaseInfo :goods="goodsInfo"></GoodsBaseInfo>
       <!--服务信息-->
       <div class="service" @click="serviceClick">
         <div v-for="(item, index) in goodsInfo.service.slice(0, 3)" :key="index"><img :src="item.icon" alt="">{{item.name}}</div>
         <div class="arrow-right"><img :src="arrowRight" alt=""></div>
       </div>
       <!--颜色款式选择-->
       <div class="sizeColor" @click="priceClick">
         <div>请选择: 颜色 尺码</div>
         <div class="arrow-right"><img :src="arrowRight" alt=""></div>
       </div>
       <!--评论信息-->
       <DetailsRateInfo ref="rateInfo" :rateInfo="rateInfo"></DetailsRateInfo>
       <!--店铺信息-->
       <DetailsShopInfo :shopInfo="shopInfo"></DetailsShopInfo>
       <!--详情tab-->
       <Tabs :titles="tabsTitle" class="tab" @tabsClick="itemClick"/>
       <!--图文详情-->
       <GoodsDetailsInfo :goodsParams="goodsParams" @infoImgLoaded="infoImgLoaded" ref="goodsInfo"></GoodsDetailsInfo>
       <!--推荐商品-->
       <RecommendGoods :recommends="recommends" ref="recommends"></RecommendGoods>
     </div>
      <!--无商品详情时显示-->
     <div class="none" v-else>
       <img :src="noneImg" alt="">
       <p>暂无详细信息</p>
     </div>
   </BScroll>
   <!--详情页底部菜单-->
   <DetailsTabbar/>
   <!--服务信息弹出抽屉-->
   <DetailsServiceDrawer v-if="showServiceDrawer" :showServiceDrawer="showServiceDrawer" :service="goodsInfo.service" @closeServiceDrawer="closeServiceDrawer" />
   <!--尺码选择抽屉-->
   <DetailsPriceDrawer v-if="showPriceDrawer"
                       :showPriceDrawer="showPriceDrawer"
                       :skuInfo="skuInfo"
                       :goods="goodsInfo"
                       :shopInfo="shopInfo"
                       @closePriceDrawer="closePriceDrawer" />
   <!--回到顶部-->
   <BackTop :bacTopImg="backTopImgUrl" v-show="showBackTop" @click.native="backClick" />
 </div>
</template>

<script>
import { getGoodsDetails, getGoodsRecommends, Goods, Shop, GoodsParams } from 'service/api'
import DetailsNavBar from './detailComps/DetailsNavBar'
import DetailsTabbar from './detailComps/DetailsTabbar'
import DetailsSwiper from './detailComps/DetailsSwiper'
import GoodsBaseInfo from './detailComps/GoodsBaseInfo'
import DetailsShopInfo from './detailComps/DetailsShopInfo'
import DetailsRateInfo from './detailComps/DetailsRateInfo'
import DetailsServiceDrawer from './detailComps/DetailsServiceDrawer'
import DetailsPriceDrawer from './detailComps/DetailsPriceDrawer'
import GoodsDetailsInfo from './detailComps/GoodsDetailsInfo'
import RecommendGoods from 'components/content/goods/RecommendGoods'
import BScroll from 'components/common/bscroll/BScroll'
import Tabs from 'components/common/tabs/Tabs'
import { backTopMixin, arrowRightMixin } from 'common/mixins'

export default {
  name: 'Details',
  data () {
    return {
      noneImg: require('assets/img/common/none.png'),
      id: '', // 商品ID
      details: [], // 商品合集
      recommends: [], // 推荐商品
      detail: null, // 单个商品
      goodsInfo: {}, // 基本信息
      topImages: [], // 轮播图片
      rateInfo: {}, // 评论信息
      shopInfo: {}, // 店铺信息
      tabsTitle: ['图文详情', '商品参数', '热卖推荐'],
      goodsParams: {}, // 商品详情参数
      skuInfo: null, // 商品库存、样式、款式信息
      /* better-scroll参数 */
      scrollProbeType: 3,
      scrollClick: true,
      showServiceDrawer: false,
      showPriceDrawer: false,
      goodsOffsetTop: 0, // 商品位置
      rateOffsetTop: 0, // 评论位置
      infoOffsetTop: 0, // 详情位置
      paramOffsetTop: 0, // 参数位置
      recommendOffsetTop: 0 // 推荐商品位置
    }
  },
  components: {
    RecommendGoods,
    DetailsNavBar,
    DetailsTabbar,
    DetailsSwiper,
    GoodsBaseInfo,
    DetailsShopInfo,
    DetailsRateInfo,
    GoodsDetailsInfo,
    BScroll,
    Tabs,
    DetailsServiceDrawer,
    DetailsPriceDrawer
  },
  mixins: [backTopMixin, arrowRightMixin],
  computed: {
    goodsId () {
      return this.$route.query.id
    }
  },
  created () {
    this.getDetails()
    this.getRecommends()
  },
  mounted () {
    this.$bus.$on('priceClick', () => {
      this.priceClick()
    })
  },
  methods: {
    getDetails () {
      // 此处以静态数据模拟，真实情况下此处根据传过来的id发送网络请求，查询数据
      getGoodsDetails().then(res => {
        // 商品集合
        this.details = res.list || []
        // 遍历查找出对应ID的商品
        res.list.map(item => {
          if (item.itemInfo.itemId === this.goodsId) {
            // 获取单个商品
            this.detail = item
            // 顶部图片
            this.topImages = item.topImages
            // 基本信息
            this.goodsInfo = new Goods(item.itemInfo, item.priceInfo, item.itemServices)
            // 评论信息
            this.rateInfo = item.rateInfo
            // 店铺信息
            this.shopInfo = new Shop(item.shopInfo)
            // 商品详情
            this.goodsParams = new GoodsParams(item.itemParams, item.detailInfo)
            // 商品库存、价格等信息
            this.skuInfo = item.skuInfo
          }
        })
      //  console.log(this.skuInfo)
      }).catch(err => {
        console.log(err)
      })
    },
    // 推荐商品数据
    getRecommends () {
      getGoodsRecommends().then(res => {
        this.recommends = res.list || []
      }).catch(err => {
        console.log(err)
      })
    },
    // 显示服务抽屉
    serviceClick () {
      //  console.log('serviceClick')
      this.showServiceDrawer = true
    },
    // 关闭服务抽屉
    closeServiceDrawer (val) {
      this.showServiceDrawer = val
    },
    // 价格抽屉
    priceClick () {
      this.showPriceDrawer = true
    },
    closePriceDrawer (val) {
      this.showPriceDrawer = val
    },
    // 图片加载完刷新better-scroll
    bannerImgLoaded () {
      // console.log('bannerImgLoaded')
      this.$refs.scroll.refresh()
      this.goodsOffsetTop = this.$refs.banner.$el.offsetTop
      this.rateOffsetTop = this.$refs.rateInfo.$el.offsetTop
    },
    infoImgLoaded () {
      // console.log('infoImgLoaded')
      this.$refs.scroll.refresh()
      this.infoOffsetTop = this.$refs.goodsInfo.$el.querySelector('.desc').offsetTop
      this.paramOffsetTop = this.$refs.goodsInfo.$el.querySelector('.size').offsetTop
      this.recommendOffsetTop = this.$refs.recommends.$el.offsetTop
    },
    // 详情tab切换点击
    itemClick (index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, -this.infoOffsetTop, 500)
          break
        case 1:
          this.$refs.scroll.scrollTo(0, -this.paramOffsetTop, 500)
          break
        case 2:
          this.$refs.scroll.scrollTo(0, -this.recommendOffsetTop, 500)
          break
      }
    },
    // 导航点击切换
    navBarItemClick (index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, -this.goodsOffsetTop, 500)
          break
        case 1:
          this.$refs.scroll.scrollTo(0, -this.rateOffsetTop, 500)
          break
        case 2:
          this.$refs.scroll.scrollTo(0, -this.infoOffsetTop, 500)
          break
        case 3:
          this.$refs.scroll.scrollTo(0, -this.recommendOffsetTop, 500)
          break
      }
    },
    contentScroll (position) {
      this.showBackTop = (-position.y) > 1000
      if (-position.y >= this.goodsOffsetTop && -position.y < this.rateOffsetTop) {
        this.$refs.navBar.currentIndex = 0
      } else if (-position.y >= this.rateOffsetTop && -position.y < this.infoOffsetTop) {
        this.$refs.navBar.currentIndex = 1
      } else if (-position.y >= this.infoOffsetTop && -position.y < this.recommendOffsetTop) {
        this.$refs.navBar.currentIndex = 2
      } else if (-position.y >= this.recommendOffsetTop) {
        this.$refs.navBar.currentIndex = 3
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.details
  height 100vh
  position relative
.nav-details
  position relative
  z-index 999
  background #FFF
.none
  text-align center
  color #dcdcdc
  img
    width 100%
.content
  position absolute
  top 2.75rem
  bottom 3.0625rem
  left 0
  right 0
.service
    display flex
    padding 1rem
    border-bottom .625rem solid rgba(214,214,214,0.361)
    justify-content space-between
    align-items center
    div
      text-align center
      font-size .75rem
      color #666
    img
      width .75rem
      height .75rem
      margin-right .125rem
      vertical-align middle
.arrow-right
    img
      width 1rem
      height 1rem
      vertical-align middle
.sizeColor
  display flex
  padding 1rem
  font-size .75rem
  color #666
  border-bottom .625rem solid rgba(214,214,214,0.361)
  justify-content space-between
  align-items center
.tab
  font-size .875rem
  border-bottom 1px solid #eee
</style>
