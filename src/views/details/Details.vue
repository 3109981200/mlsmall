<template>
 <div class="details">
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
          <!--文字描述-->
        <div class="desc">
           <div class="lineBar"><i class="dot"></i></div>
           <div class="desc-text">{{detailInfo.desc}}</div>
           <div class="lineBar right"><i class="dot"></i></div>
        </div>
          <!--图文详情-->
        <div class="detail">
           <div class="desc">{{detailInfo.detailImage[0].key}}</div>
           <div class="detail-img">
             <img :src="item" alt="" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
           </div>
           <div class="size" v-if="sizeInfo.rule">
             <div class="row" v-for="(item, index) in sizeInfo.rule.tables[0]" :key="index" :class="{nbg: index===0}">
               <div class="col" v-for="(val,index) in item" :key="index" :class="{nbg: index===0}">{{val}}</div>
             </div>
             <div class="row" v-for="(value, key, index) in sizeInfo.info.set" :key="'info-'+ index">
               <div class="info-head nbg">{{key}}</div>
               <div class="info-end">{{value}}</div>
             </div>
           </div>
        </div>
       <!--推荐商品-->
       <div class="goods-recommend">
         <div class="item" v-for="(item,index) in recommends" :key="index">
           <img :src="item.image" alt="">
           <div class="title">{{item.title}}</div>
           <div class="price">￥{{item.price}}</div>
         </div>
       </div>
     </div>
     <div class="none" v-else>
       <img :src="noneImg" alt="">
       <p>暂无详细信息</p>
     </div>
   </BScroll>
   <DetailsTabbar></DetailsTabbar>
   <DetailsServiceDrawer ref="serviceDialog" :showServiceDrawer="showServiceDrawer" :service="goodsInfo.service" @closeServiceDrawer="closeServiceDrawer" />
 </div>
</template>

<script>
import { getGoodsDetails, getGoodsRecommends, Goods, Shop } from 'service/home'
import DetailsNavBar from './detailComps/DetailsNavBar'
import DetailsTabbar from './detailComps/DetailsTabbar'
import DetailsSwiper from './detailComps/DetailsSwiper'
import GoodsBaseInfo from './detailComps/GoodsBaseInfo'
import DetailsShopInfo from './detailComps/DetailsShopInfo'
import DetailsRateInfo from './detailComps/DetailsRateInfo'
import DetailsServiceDrawer from './detailComps/DetailsServiceDrawer'
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
      detailInfo: {}, // 图文信息
      sizeInfo: {}, // 尺码规格
      /* better-scroll参数 */
      scrollProbeType: 3,
      scrollClick: true,
      showServiceDrawer: false,
      showPriceDrawer: false
    }
  },
  components: {
    DetailsNavBar,
    DetailsTabbar,
    DetailsSwiper,
    GoodsBaseInfo,
    DetailsShopInfo,
    DetailsRateInfo,
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
            this.detailInfo = item.detailInfo
            // 商品规格和尺寸
            this.sizeInfo = item.itemParams
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
.comment
  padding 10px 10px 0
  border-bottom 10px solid rgba(214,214,214,0.361)
  &-top
    display flex
    justify-content space-between
    font-size 12px
    color #999
    padding-top 10px
  &-tags
    display flex
    flex-wrap wrap
    align-items center
    font-size 12px
    padding 10px 0
    div
      padding 12px 5px 0 0
    span
      padding 3px 5px
      border-radius 2px
      background-color #f6f6f6
    .positive
      color: #FF2255
      background-color: #FFE8EE
  &-item
    padding 20px 0
    border-bottom 1px solid #eee
    &-top
      display flex
      align-items center
      padding-bottom 10px
      img
        width 30px
        height 30px
        border-radius 100%
        margin-right 10px
    &-content
      font-size 14px
      padding-bottom 10px
      line-height 20px
    &-date
    &-info
      font-size 12px
      color #999
      padding-bottom 10px
      span
        margin-right 10px
.explain
  font-size 14px
  color #999
  border-top 1px #ddd dotted
  padding-top 10px
  line-height 20px
.tab
  font-size 14px
  border-bottom 1px solid #eee
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
.detail
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
.goods-recommend
    padding 10px 5px
    display flex
    flex-wrap wrap
    .item
      width 33.33%
      padding 0 5px
      padding-bottom 10px
      img
        width 100%
      .title
        font-size 12px
        overflow: hidden
        text-overflow: ellipsis
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp:1
        margin 5px 0
    .price
        font-size 12px
</style>
