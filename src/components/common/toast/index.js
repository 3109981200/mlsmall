import Toast from './Toast'
const ToastObj = {}

ToastObj.install = function (Vue) {
  // console.log('Toast')
  // console.log(Vue)
  // 1. 创建组件构造器
  const ToastConstructor = Vue.extend(Toast)

  // 2. 通过组件构造器 创建一个组件对象
  const toast = new ToastConstructor()

  // 3. 将组件对象挂载到一个元素上面
  toast.$mount(document.createElement('div'))

  // 4. 将元素追加到DOM上 toast.$el 即为挂载的div元素
  document.body.appendChild(toast.$el)

  // 5. 给vue原型注册组件
  Vue.prototype.$toast = toast
}

export default ToastObj
