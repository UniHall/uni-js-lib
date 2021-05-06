export function parseTreeData(normalList, parentIdName, rootCodeList) {
  var treeData = []
  if (normalList.length > 0) {
    for (let index = 0; index < normalList.length; index++) {
      const n = normalList[index]
      if (!n[parentIdName] || (rootCodeList && rootCodeList.includes(n.code))) {
        treeData.push(n)
      }
    }
    parseChildTree(normalList, treeData, parentIdName)
  }
  return treeData
}

export function parseChildTree(normalList, parentList, parentIdName) {
  if (normalList.length !== 0 && parentList.length !== 0) {
    for (let index = 0; index < parentList.length; index++) {
      const parentElement = parentList[index]
      for (let childIndex = 0; childIndex < normalList.length; childIndex++) {
        const childElement = normalList[childIndex]
        if (parentElement.id === childElement[parentIdName]) {
          parentElement.children = parentElement.children || []
          parentElement.children.push(childElement)
        }
      }
      if (normalList.length > 0 && parentElement.children && parentElement.children.length > 0) {
        parseChildTree(normalList, parentElement.children, parentIdName)
      }
    }
  }
}

export function consoleData(data) {
  console.info(data)
}