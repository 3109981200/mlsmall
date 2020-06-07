import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册组件
Vue.use(VueRouter)

// route懒加载
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/ShopCart')
const Profile = () => import('views/profile/Profile')
const GoodsDetails = () => import('views/goodsDetails/GoodsDetails')
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
    path: '/cart',
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
    path: '/goodsDetails',
    component: GoodsDetails,
    meta: {
      title: '商品详情页'
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
