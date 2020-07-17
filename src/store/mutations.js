import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
  // 购物车内有该商品则数量增加
  [ADD_COUNTER] (state, payload) {
  },
  // 购物车内无该商品则 添加到购物车
  [ADD_TO_CART] (state, payload) {
    state.cartList.push(payload)
  }
}
