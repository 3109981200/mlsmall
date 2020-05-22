// 具体请求API
import { Service } from 'service/config'

export function getHomeMultidata () {
  return Service({
    url: '/data/home.json'
  })
}
