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
export function getGoodsRecommends () {
  return Service({
    url: '/data/goods_recommend.json'
  })
}
// 商品类
export class Goods {
  constructor (itemInfo, priceInfo, itemServices) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.pickforme = itemInfo.pickforme
    this.currency = priceInfo.currency
    this.nowPrice = priceInfo.nowPrice
    this.oldPrice = priceInfo.oldPrice
    this.priceTags = priceInfo.priceTags[0].text
    itemServices.columns.map(item => {
      if (item.name === 'address') { this.address = item.desc }
    })
    itemServices.columns.map(item => {
      if (item.name === 'express') { this.express = item.desc }
    })
    itemServices.columns.map(item => {
      if (item.name === 'sales') { this.sales = item.desc }
    })
    this.service = itemServices.services
  }
}
// 商铺类
export class Shop {
  constructor (shopInfo) {
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.level = shopInfo.level
    this.saleDesc = shopInfo.saleDescV2
    this.labels = shopInfo.shopLabels
  }
}
// 商品信息类
export class GoodsParams {
  constructor (itemParams, detailInfo) {

  }
}
