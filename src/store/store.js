import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
const state = {
  cartList: [] // 购物车商品列表
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
