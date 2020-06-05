import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import waterfall from 'vue-waterfall2'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // 创建事件总线

Vue.use(ElementUI)
Vue.use(waterfall)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
