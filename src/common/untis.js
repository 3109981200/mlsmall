// 图片加载防抖动刷新
export function debounce (fun, time) {
  let timer = null
  return function (...args) {
    if (timer) clearInterval(timer)
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, time)
  }
}
