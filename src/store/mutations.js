import { ADD_COUNTER, ADD_TO_CART, DEL_CART_ITEM } from './mutation-types'
export default {
  // 购物车内有该商品则数量增加
  [ADD_COUNTER] (state, payload) {
  },
  // 购物车内无该商品则 添加到购物车
  [ADD_TO_CART] (state, payload) {
    payload.checked = true // 商品的选中状态
    state.cartList.push(payload)
  },
  // 移除购物车中的商品
  [DEL_CART_ITEM] (state, payload) {
    state.cartList.splice(payload, 1)
  }
}
