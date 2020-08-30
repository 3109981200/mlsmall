<template>
    <div class="right-content" v-loading="isLoading">
      <Tabs :titles="tabsTitles" ref="tabs1" v-show="isFixed" class="fixed category-tabs"/>
      <BScroll class="content" :probeType="scrollProbeType" :pullUpLoad="scrollPullUpLoad" :scrollClick="scrollClick" @scroll="contentScroll">
        <CategoryRecCategory :recData="recList" @imgLoad="imgLoad"></CategoryRecCategory>
        <Tabs :titles="tabsTitles" ref="tabs2" class="category-tabs"/>
        <GoodsList :goods="goodsList"></GoodsList>
      </BScroll>
    </div>
</template>

<script>
import { categoryGoods } from 'service/api'
import BScroll from 'components/common/bscroll/BScroll'
import CategoryRecCategory from './CategoryRecCategory'
import GoodsList from 'components/content/goods/GoodsList'
import Tabs from 'components/common/tabs/Tabs'
export default {
  name: 'CategoryContentList',
  components: {
    BScroll,
    CategoryRecCategory,
    GoodsList,
    Tabs
  },
  data () {
    return {
      isFixed: false,
      tabsOffsetTop: 0, // tabs偏移量
      isLoading: false,
      scrollProbeType: 3,
      scrollPullUpLoad: true,
      scrollClick: true,
      recList: [],
      goodsList: [],
      tabsTitles: ['综合', '新款', '销量']
    }
  },
  created () {
    this.getCategoryGoods()
  },
  methods: {
    getCategoryGoods () {
      this.isLoading = true
      categoryGoods().then(res => {
        console.log(res)
        this.isLoading = false
        this.recList = res.list || []
        this.goodsList = res.goodsList || []
      }).catch(err => {
        console.log(err)
      })
    },
    imgLoad () {
      this.tabsOffsetTop = this.$refs.tabs2.$el.offsetTop
      // console.log(this.tabsOffsetTop)
    },
    contentScroll (position) {
      this.isFixed = (-position.y) > this.tabsOffsetTop
    }
  }
}
</script>

<style scoped lang="stylus">
.right-content
  position relative
  width 100%
  height auto
  .content
    position absolute
    top 0
    bottom 0
    left 100px
    right 0
.fixed
  position absolute
  left 100px
  width calc(100% - 100px)
  z-index 9
.category-tabs
  font-size 14px
</style>
