import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册组件
Vue.use(VueRouter)

// 创建路有对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: () => import('views/category/Category'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: () => import('views/cart/ShopCart'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile'),
    meta: {
      title: '我的'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 路有导航设置页面title
router.beforeEach((to, from, next) => {
  // console.log(to)
  document.title = to.matched[0].meta.title
  next()
})

export default router
