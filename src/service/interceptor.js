import axios from 'axios'
import { Message, Loading } from 'element-ui'

export default function interceptorFunction () {
  console.log('拦截器信息')
  let loadingInstance = null
  // const token = localStorage.token

  // 请求拦截器
  axios.interceptors.request.use(config => {
    // 此处业务简单 为显示加载loading
    loadingInstance = Loading.service({
      lock: true,
      text: '数据加载中......',
      background: 'rgba(0,0,0,.6)'
    })
    return config
  })

  // 响应拦截器
  axios.interceptors.response.use(response => {
    // 此处业务简单 为关闭加载loading 返回数据
    /*    setTimeout(() => {
      loadingInstance.close()
    }, 2000) */
    loadingInstance.close()
    return response.data
  }, error => {
    console.log('ERROR：' + error)
    if (error.message.includes('timeout')) {
      console.log('响应超时：' + error)
      Message({
        message: '响应超时：' + error,
        type: 'error',
        duration: 3000
      })
      loadingInstance.close()
    }
    if (error.message.includes('404')) {
      console.log('请求资源不存在：' + error)
      Message({
        message: '请求资源不存在：' + error,
        type: 'error',
        duration: 3000
      })
      loadingInstance.close()
    }
    return Promise.reject(error)
  })
  // console.log('token:' + token)
}
