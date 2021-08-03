const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'shanghai'
  },
  arr: [1, 2, 3]
}

// deepClone 对象的深拷贝
function deepClone (obj = {}) {
  // 1. 判断传入参数是否为对象 否， 直接返回 obj
  //  此处 obj == null 相当于 obj === null || obj === undefined
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 2. 初始化 结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  // 3.处理 传入的参数
  for (let key in obj) {
    // hasOwnProperty : 确定对象是否具有具有指定名称的属性  
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }


  return result
}

const obj2 = deepClone(obj1)
console.log(obj2);