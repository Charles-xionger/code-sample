const Obj = {
  name: '123',
  age: '25',
  address: {
    city: '江苏盐城'
  },
  number: [1, 2, 3, 4]
}

/**
 * JSON.parse(JSON.stringify(obj)) 能实现简单数据结构的拷贝，但是对于函数，以及Map，Set.
 * 也无法解决循环引用的问题
 */

/**
 * @param {*} source 
 * @returns 
 */
// 简单的深拷贝
const deepClone = function (source = {}) {
  if (typeof source !== 'object' || source == null) {
    return source
  }
  let target = Array.isArray(source) ? [] : {}

  for (let [key, value] of Object.entries(source)) {
    //保证 key 不是原型上的属性
    if (source.hasOwnProperty(key)) {
      target[key] = deepClone(value)
    }
  }

  return target
}

const result2 = deepClone(Obj)
console.log(result2)