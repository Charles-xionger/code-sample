export function useStrictObject (data, desc) {
  // 1. 是对象或者是null ,报错
  if (typeof data !== 'object' || data === null) {
    throw new Error('we need a type `object` without `null`')
  }
  // 2. 如果不是数组，是对象调用 defineObject方法
  if (!Array.isArray(data)) {
    return defineObject(data, desc)
  }

  return data.map(item => {
    return defineObject(item, desc)
  })
}

function defineObject (data, desc) {
  let _obj = new ConstructObject()

  for (let k in data) {
    Object.defineProperty(_obj, k, {
      ...desc[k],
      value: data[k]
    })
  }

  return _obj
}

function ConstructObject () {
  // 将构造函数原型上的属性设置成不可枚举，不可修改，不可设置
  for (let k in ConstructObject.prototype) {
    Object.defineProperty(ConstructObject.prototype, k, {
      writable: false,
      enumerable: false,
      configurable: false
    })
  }
}

ConstructObject.prototype.setConfig = function (prop, desc, value) {
  Object.defineProperty(this, prop, {
    [desc]: value
  })
}