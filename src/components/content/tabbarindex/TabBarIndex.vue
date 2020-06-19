<template>
  <tabBar>
    <tabBarItem :path="path[0]" :activeColor="activeColor">
      <div slot="item-text">首页</div>
      <div slot="item-icon"><img :src="homeIcon" alt=""></div>
      <div slot="item-icon-active"><img :src="homeActiveIcon" alt=""></div>
    </tabBarItem>
    <tabBarItem :path="path[1]" :activeColor="activeColor">
      <div slot="item-text">分类</div>
      <div slot="item-icon"><img :src="categoryIcon" alt=""></div>
      <div slot="item-icon-active"><img :src="categoryActiveIcon" alt=""></div>
    </tabBarItem>
    <tabBarItem :path="path[2]" :activeColor="activeColor">
      <div slot="item-text">购物车</div>
      <div slot="item-icon"><img :src="shopIcon" alt=""></div>
      <div slot="item-icon-active"><img :src="shopActiveIcon" alt=""></div>
    </tabBarItem>
    <tabBarItem :path="path[3]" :activeColor="activeColor">
      <div slot="item-text">我的</div>
      <div slot="item-icon"><img :src="profileIcon" alt=""></div>
      <div slot="item-icon-active"><img :src="profileActiveIcon" alt=""></div>
    </tabBarItem>
  </tabBar>
</template>

<script>
import tabBar from 'components/common/tabbar/TabBar'
import tabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'mainTabBar',
  data () {
    return {
      path: ['/home', '/category', '/cart', '/profile'],
      activeColor: '#FF5777',
      homeIcon: require('assets/img/tabbar/home.svg'),
      homeActiveIcon: require('assets/img/tabbar/home_active.svg'),
      categoryIcon: require('assets/img/tabbar/category.svg'),
      categoryActiveIcon: require('assets/img/tabbar/category_active.svg'),
      shopIcon: require('assets/img/tabbar/shopcart.svg'),
      shopActiveIcon: require('assets/img/tabbar/shopcart_active.svg'),
      profileIcon: require('assets/img/tabbar/profile.svg'),
      profileActiveIcon: require('assets/img/tabbar/profile_active.svg')
    }
  },
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style scoped>

</style>
