/**
 * 将字符串格式化为固定格式金额字符串
 * @param {String} s 格式化的金额字符串
 * @param {Number} n 小数位数
 */
 export function formatMoney(s, n) {
  if (s === undefined || s === '' || s === null) {
    return '0.00'
  }
  n = n >= 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
  var l = s.split('.')[0].split('').reverse()
  var r = s.split('.')[1]
  var i
  var t = ''
  for (i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length && l[i + 1] !== '-' ? ',' : '')
  }
  return t.split('').reverse().join('') + (r ? '.' + r : '')
}

/**
 * 获取随机数
 * @param {Number} length 随机数长度
 */
 export function random(length) {
  var str = Math.random().toString(36).substr(2)
  if (str.length >= length) {
    return str.substr(0, length)
  }
  str += random(length - str.length)
  return str
}

/**
 * 将含有千分符的金额字符串转化为数字类型
 * @param {String} moneyStr 需要格式化的字符串
 */
 export function removeMoneySeperation(moneyStr) {
  moneyStr = moneyStr.toString() || ''
  if (moneyStr === '') {
    return 0
  }
  var reg = new RegExp(',', 'g')
  var number = moneyStr.replace(reg, '').replace(/[^\d\.-]/g, '')
  if (number === '') {
    return 0
  }
  return parseFloat(number)
}

/**
 * 格式化数字
 * @param {Number} num 要格式化的数字
 * @param {Number} cent 小数位数
 * @param {boolean} isThousand 是否展示千分符
 * @param {String} defaultValue 默认展示的值
 */
 export function formatNumber(num, cent, isThousand, defaultValue) {
  if (num === undefined || num === '' || num === null) {
    return defaultValue || ''
  }
  num = num.toString().replace(/\$|\,/g, '')
  if (isNaN(num)) {
    num = '0'
  }
  var sign = (num === (num = Math.abs(num)))
  num = Math.floor(num * Math.pow(10, cent) + 0.50000000001)
  var cents = num % Math.pow(10, cent)
  num = Math.floor(num / Math.pow(10, cent)).toString()
  cents = cents.toString()
  while (cents.length < cent) {
    cents = '0' + cents
  }
  if (isThousand) {
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
      num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3))
    }
  }
  if (cent > 0) {
    return (((sign) ? '' : '-') + num + '.' + cents)
  } else {
    return (((sign) ? '' : '-') + num)
  }
}