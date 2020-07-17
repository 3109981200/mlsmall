import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
  addCart (context, payload) { // 添加到购物车
    // 1. 查找购物车内有没有当前添加的商品
    const goods = context.state.cartList.find((item) => {
      return item.goodsId === payload.goodsId && item.size === payload.size && item.style === payload.style
    })

    // 2. 如果有当前商品 则数量增加  没有则添加当前商品
    if (goods) {
      goods.counter += payload.counter
      context.commit(ADD_COUNTER, payload)
    } else {
      context.commit(ADD_TO_CART, payload)
    }
  }
}
