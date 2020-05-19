<template>
  <tabBar>
    <tabBarItem :path="path[0]" :activeColor="activeColor">
      <div slot="item-text">首页</div>
      <div slot="item-icon"><img src="@/assets/img/tabbar/home.svg" alt=""></div>
      <div slot="item-icon-active"><img src="@/assets/img/tabbar/home_active.svg" alt=""></div>
    </tabBarItem>
    <tabBarItem :path="path[1]" :activeColor="activeColor">
      <div slot="item-text">分类</div>
      <div slot="item-icon"><img src="@/assets/img/tabbar/category.svg" alt=""></div>
      <div slot="item-icon-active"><img src="@/assets/img/tabbar/category_active.svg" alt=""></div>
    </tabBarItem>
    <tabBarItem :path="path[2]" :activeColor="activeColor">
      <div slot="item-text">购物车</div>
      <div slot="item-icon"><img src="@/assets/img/tabbar/shopcart.svg" alt=""></div>
      <div slot="item-icon-active"><img src="@/assets/img/tabbar/shopcart_active.svg" alt=""></div>
    </tabBarItem>
    <tabBarItem :path="path[3]" :activeColor="activeColor">
      <div slot="item-text">我的</div>
      <div slot="item-icon"><img src="@/assets/img/tabbar/profile.svg" alt=""></div>
      <div slot="item-icon-active"><img src="@/assets/img/tabbar/profile_active.svg" alt=""></div>
    </tabBarItem>
  </tabBar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar'
import tabBarItem from 'components/common/tabbar/tabBarItem'
export default {
  name: 'mainTabBar',
  data () {
    return {
      path: ['/home', '/category', '/cart', '/profile'],
      activeColor: '#FF5777'
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
