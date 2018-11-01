// 判断参数是否是其中之一
export function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

// 驼峰转中划线
export function camelcaseToHyphen(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// scrollTop animation
export function scrollTop(el, from = 0, to, duration = 500, endCallback) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60)
      }
  }
  const difference = Math.abs(from - to)
  const step = Math.ceil((difference / duration) * 50)

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback()
      return
    }

    let d = start + step > end ? end : start + step
    if (start > end) {
      d = start - step < end ? end : start - step
    }

    if (el === window) {
      window.scrollTo(d, d)
    } else {
      el.scrollTop = d
    }
    window.requestAnimationFrame(() => scroll(d, end, step))
  }
  scroll(from, to, step)
}
