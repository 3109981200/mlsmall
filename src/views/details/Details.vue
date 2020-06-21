<template>
 <div class="details">
   <!--详情页头部导航-->
   <DetailsNavBar class="nav-details"></DetailsNavBar>
   <BScroll class="content" :scrollProbeType="scrollProbeType" :scrollClick="scrollClick">
     <div v-if="detail">
       <!--头部轮播-->
       <DetailsSwiper :bannerImg="topImages"></DetailsSwiper>
       <!--基本信息-->
       <GoodsBaseInfo :goods="goodsInfo"></GoodsBaseInfo>
       <!--服务信息-->
       <div class="service" @click="serviceClick">
         <div v-for="(item, index) in goodsInfo.service.slice(0, 3)" :key="index"><img :src="item.icon" alt="">{{item.name}}</div>
         <div class="arrow-right"><img :src="arrowRight" alt=""></div>
       </div>
       <!--颜色款式选择-->
       <div class="sizeColor">
         <div>请选择: 颜色 尺码</div>
         <div class="arrow-right"><img :src="arrowRight" alt=""></div>
       </div>
       <!--评论信息-->
       <DetailsRateInfo :rateInfo="rateInfo"></DetailsRateInfo>
       <!--店铺信息-->
       <DetailsShopInfo :shopInfo="shopInfo"></DetailsShopInfo>
       <!--详情tab-->
       <Tabs :titles="tabsTitle" class="tab"/>
       <!--图文详情-->
       <GoodsDetailsInfo :goodsParams="goodsParams"></GoodsDetailsInfo>
       <!--推荐商品-->
       <RecommendGoods :recommends="recommends"></RecommendGoods>
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
   <DetailsServiceDrawer ref="serviceDialog" :showServiceDrawer="showServiceDrawer" :service="goodsInfo.service" @closeServiceDrawer="closeServiceDrawer" />
 </div>
</template>

<script>
import { getGoodsDetails, getGoodsRecommends, Goods, Shop, GoodsParams } from 'service/home'
import DetailsNavBar from './detailComps/DetailsNavBar'
import DetailsTabbar from './detailComps/DetailsTabbar'
import DetailsSwiper from './detailComps/DetailsSwiper'
import GoodsBaseInfo from './detailComps/GoodsBaseInfo'
import DetailsShopInfo from './detailComps/DetailsShopInfo'
import DetailsRateInfo from './detailComps/DetailsRateInfo'
import DetailsServiceDrawer from './detailComps/DetailsServiceDrawer'
import GoodsDetailsInfo from './detailComps/GoodsDetailsInfo'
import RecommendGoods from 'components/content/goods/RecommendGoods'
import BScroll from 'components/common/bscroll/BScroll'
import Tabs from 'components/common/tabs/Tabs'

export default {
  name: 'Details',
  data () {
    return {
      noneImg: require('assets/img/common/none.png'),
      arrowRight: require('assets/img/common/arrow-right.svg'),
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
      /* better-scroll参数 */
      scrollProbeType: 3,
      scrollClick: true,
      showServiceDrawer: false,
      showPriceDrawer: false
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
    DetailsServiceDrawer
  },
  computed: {
    goodsId () {
      return this.$route.query.id
    }
  },
  created () {
    this.getDetails()
    this.getRecommends()
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
          }
        })
        console.log(this.detail)
      }).catch(err => {
        console.log(err)
      })
    },
    getRecommends () {
      getGoodsRecommends().then(res => {
        this.recommends = res.list || []
      }).catch(err => {
        console.log(err)
      })
    },
    serviceClick () {
      //  console.log('serviceClick')
      this.showServiceDrawer = true
    },
    closeServiceDrawer (val) {
      this.showServiceDrawer = val
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
  top 44px
  bottom 49px
  left 0
  right 0
.service
    display flex
    padding 10px
    border-bottom 10px solid rgba(214,214,214,0.361)
    justify-content space-between
    align-items center
    div
      text-align center
      font-size 12px
      color #666
    img
      width 12px
      height 12px
      margin-right 2px
      vertical-align middle
.arrow-right
    img
      width 16px
      height 16px
      vertical-align middle
.sizeColor
  display flex
  padding 10px
  font-size 12px
  color #666
  border-bottom 10px solid rgba(214,214,214,0.361)
  justify-content space-between
  align-items center
.tab
  font-size 14px
  border-bottom 1px solid #eee
</style>
