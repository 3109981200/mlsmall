// 具体请求API
import { Service } from 'service/config'
/**
 * home
 */
export function getHomeMultidata () {
  return Service({
    url: '/data/home.json'
  })
}
export function getGoods () {
  return Service({
    url: '/data/goods.json'
  })
}
/*
api 请求数据
export default getGoods (type, page){
  return Service({
    url: '',
    params:{
      page,type
    }
  })
} */

/**
 * details
 */
export function getGoodsDetails () {
  return Service({
    url: '/data/goods_details.json'
  })
}
