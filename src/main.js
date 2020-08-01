import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import waterfall from 'vue-waterfall2'
import interceptor from './service/interceptor'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // 创建事件总线

Vue.use(waterfall)
Vue.use(VueAwesomeSwiper)
Vue.use(interceptor)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
