import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册组件
Vue.use(VueRouter)

// route懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/ShopCart')
const Profile = () => import('views/profile/Profile')
const Details = () => import('views/details/Details')
const Shop = () => import('views/shop/Shop')
const Customer = () => import('views/customer/Customer')
const Collect = () => import('views/collect/Collect')
const Rate = () => import('views/rate/RateList')
// 创建路有对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart/cartList',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/details',
    component: Details,
    meta: {
      title: '商品详情页'
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta: {
      title: '商铺页'
    }
  },
  {
    path: '/customer',
    component: Customer,
    meta: {
      title: '客服页'
    }
  },
  {
    path: '/collect',
    component: Collect,
    meta: {
      title: '收藏页'
    }
  },
  {
    path: '/rate/list',
    component: Rate,
    meta: {
      title: '评论页'
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
