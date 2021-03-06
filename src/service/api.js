// 具体请求API
import axios from 'axios'
import config from './config'

const BASE_URL = config.BASE_URL
/**
 * home
 */
export function getHomeMultidata () {
  return axios.get(`${BASE_URL}/home/home.json`)
}
export function getGoods () {
  return axios.get(`${BASE_URL}/home/goods.json`)
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
  return axios.get(`${BASE_URL}/detail/goods_details.json`)
}
export function getGoodsRecommends () {
  return axios.get(`${BASE_URL}/detail/goods_recommend.json`)
}
/**
 ratelist
 * */
export function getRateList () {
  return axios.get(`${BASE_URL}/rate/goods_rate.json`)
}

/**
 * profile
 * */
export function profileData () {
  return axios.get(`${BASE_URL}/profile/profile.json`)
}

/**
 * category
 * */
export function getCategory () {
  return axios.get(`${BASE_URL}/category/category.json`)
}
export function hotSearchKey () {
  return axios.get(`${BASE_URL}/category/hot_search.json`)
}
export function searchResult () {
  return axios.get(`${BASE_URL}/category/category_data.json`)
}
export function categoryGoods () {
  return axios.get(`${BASE_URL}/category/category_rec.json`)
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
    this.highNowPrice = priceInfo.highNowPrice || ''
    this.priceSplit = priceInfo.priceSplit
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
    this.desc = detailInfo.desc
    this.detailImages = detailInfo.detailImage
    this.sizeInfo = itemParams.rule
    this.style = itemParams.info
  }
}
