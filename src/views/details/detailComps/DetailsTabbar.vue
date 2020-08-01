<!--详情页底部导航组件-->
<template>
      <TabBar>
        <TabBarItem :path="path[0]" :activeColor="activeColor" @click="itemClick">
          <div slot="item-icon"><img :src="shopIcon" alt=""></div>
          <div slot="item-icon-active"><img :src="shopActiveIcon" alt=""></div>
          <div slot="item-text">店铺</div>
        </TabBarItem>
        <TabBarItem :path="path[1]" :activeColor="activeColor" :isActive1="isActive" @click="itemClick">
          <div slot="item-icon"><img :src="customerIcon" alt=""></div>
          <div slot="item-icon-active"><img :src="customerActiveIcon" alt=""></div>
          <div slot="item-text">客服</div>
        </TabBarItem>
        <TabBarItem :path="path[2]" :activeColor="activeColor" @click="itemClick">
          <div slot="item-icon"><img :src="collectIcon" alt=""></div>
          <div slot="item-icon-active"><img :src="collectActiveIcon" alt=""></div>
          <div slot="item-text">收藏</div>
        </TabBarItem>
        <div class="btn-addCar" @click="addCart">加入购物车</div>
        <div class="btn-buy" @click="buyNow">立即购买</div>
      </TabBar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'DetailsTabbar',
  data () {
    return {
      path: ['/shop', '/customer', '/collect'],
      activeColor: '#FF5777',
      isActive: true,
      customerIcon: require('assets/img/common/customer.svg'),
      customerActiveIcon: require('assets/img/common/customer_active.svg'),
      shopIcon: require('assets/img/common/shop.svg'),
      shopActiveIcon: require('assets/img/common/shop_active.svg'),
      collectIcon: require('assets/img/common/collect.svg'),
      collectActiveIcon: require('assets/img/common/collect_active.svg')
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
    itemClick () {
      console.log('itemClick')
    },
    addCart () {
      console.log('加入购物车')
      this.$bus.$emit('priceClick')
    },
    buyNow () {
      console.log('立即购买')
      this.$bus.$emit('priceClick')
    }
  }
}
</script>

<style scoped lang="stylus">
.btn-addCar
  width 100px
  height 49px
  background #ffe6e8
  line-height 49px
  text-align center
  color #ff5777
.btn-buy
  width 100px
  height 49px
  background #ff468f
  line-height 49px
  text-align center
  color #FFF
</style>
