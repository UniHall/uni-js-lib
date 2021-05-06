/*
判断一个变量是否为空
 */
export function isEmpty(value) {
  // 先判断参数的类型：字符串、数组、对象
  const valueType = typeof value
  switch (valueType) {
    case 'undefined':
      return true
    case 'string':
      if (value === '') {
        return true
      } else {
        return false
      }
    case 'number':
      if (Number.isNaN(value)) {
        return true
      } else {
        return false
      }
    case 'boolean':
      return false
    case 'object':
      // null
      if (value === null) {
        return true
      } else if (Array.isArray(value) && value.lengh === 0) {
        // 数组
        return true
      } else if (value instanceof Function) {
        // 函数
        return false
      } else if (value instanceof Blob) {
        return value.size === 0
      } else {
        // 其他js对象: json对象、Map、Set等
        return Object.keys(value).length === 0
      }
    default:
      return true
  }
}


/**
 * 获取数据的类型
 * @param {*} value 要判断的数据
 * @returns String 数据类型
 */
export function getDataType(value) {
  const valueType = Object.prototype.toString.call(value).slice(8, -1)
  return valueType.toLowerCase()
}