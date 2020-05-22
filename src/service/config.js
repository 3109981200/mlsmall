// 封装axios的配置信息
import axios from 'axios'
import { Message, Loading } from 'element-ui' // 使用element-ui库处理loading和message

const ConfigBaseURL = 'http://localhost:8080/' // 配置默认路径
let loadingInstance = null // 设置loading

// 使用create方法创建axios实例
export const Service = axios.create({
  timeout: 5000,
  baseURL: ConfigBaseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截器
Service.interceptors.request.use(config => {
  // 拦截业务，此处为加载loading
  loadingInstance = Loading.service({
    lock: true,
    text: 'loading...',
    background: 'rgba(0, 0, 0, 0.3)'
  })
  return config
})

// 响应拦截器
Service.interceptors.response.use(response => {
  // 拦截业务，此处为关闭loading
  loadingInstance.close()
  // console.log(response)
  return response.data
}, error => { // 响应错误信息
  console.log('TCL:error' + error)
  const msg = error.Message !== undefined ? error.Message : ''
  Message({
    message: '网络错误' + msg,
    type: 'error',
    duration: 3 * 1000
  })
  loadingInstance.close()
  return Promise.reject(error)
})
