function cloneDeep (source) {
  // 1. 不是对象或者为空
  if (typeof source !== 'object' || source == null) {
    return source
  }

  let target = {}

  // 2. 是 Map
  if (source instanceof Map) {
    target = new Map()
    source.forEach((value, key) => {
      const v1 = cloneDeep(value)
      const k1 = cloneDeep(key)
      target.set(k1, v1)
    })
  }

  // 3. set
  if (source instanceof Set) {
    target = new Set()
    source.forEach(value => {
      const v1 = cloneDeep(value)
      target.add(v1)
    })
  }

  // 4. array
  if (Array.isArray(source)) {
    target = source.map(item => cloneDeep(item)) // Arrat.prototype.map 返回一个由原数组执行回调函数的结果组成的新数组
  }

  // 5. Object
  for (const key in source) {
    if (typeof value === 'object' && value !== null && !(value instanceof RegExp)) {
      target[key] = cloneDeep(source[key])
    } else {
      target[key] = source[key]
    }
  }
  return target
}


const obj = {
  a: 10,
  b: undefined,
  c: /\w/g,
  d: function () {
    return true;
  },
  e: {
    m: 20,
    n: 30
  },
  set: new Set([10, 20, 30]),
  map: new Map([['a', 10], ['b', 20]])
};

const res = cloneDeep(obj)
console.log(res)