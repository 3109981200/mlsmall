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

// 日期格式化  时间戳
/**
 * @param time 时间戳 delimiter 分隔符
* */
export function formatDate (time) {
  const delimiter = '-'
  const now = new Date(time * 1000)
  const year = now.getFullYear()
  let month = now.getMonth() + 1
  let day = now.getDate()
  let hours = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()

  // 补0操作
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  hours = hours < 10 ? '0' + hours : hours
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second

  return year + delimiter + month + delimiter + day + ' ' + hours + ':' + minute + ':' + second
}
