/**
 * 根据字段对数组进行分组
 * @param {List} array 要分组的list
 * @param {String} id 分组依据字段的key值
 */
 export function groupBy(array, id) {
  const groups = {}
  array.forEach(function(o) {
    const group = typeof o[id] === 'string' ? o[id] : JSON.stringify(o[id])
    groups[group] = groups[group] || []
    groups[group].push(o)
  })
  return groups
}

/**
 * 校验checkList中的数据是否全部在allList中
 * @param {List} checkList 检查的数组
 * @param {List} allList 全部数据数组
 * @returns boolean 是否全部包含
 */
export function containsAll(checkList, allList) {
  return checkList.every(item => {
    return allList.includes(item)
  })
}