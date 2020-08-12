import { ADD_COUNTER, ADD_TO_CART, DEL_CART_ITEM } from './mutation-types'
export default {
  addCart (context, payload) { // 添加到购物车
    return new Promise((resolve, reject) => {
      // 1. 查找购物车内有没有当前添加的商品
      const goods = context.state.cartList.find((item) => {
        return item.goodsId === payload.goodsId && item.size === payload.size && item.style === payload.style
      })

      // 2. 如果有当前商品 则数量增加  没有则添加当前商品
      if (goods) {
        goods.counter += payload.counter
        context.commit(ADD_COUNTER, payload)
        resolve('购物车商品数量增加')
      } else {
        context.commit(ADD_TO_CART, payload)
        resolve('商品添加购物车成功！')
      }
    })
  },
  removeCartItem (context, payload) {
    return new Promise((resolve, reject) => {
      context.commit(DEL_CART_ITEM, payload)
      resolve('移除商品成功！')
    })
  }
}
