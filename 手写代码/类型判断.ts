/**
 * 常用的类型判断
 * 1. typeof 只能识别值类型和Object, function , 对于引用类型无法进一步识别
 * 2. instanceof 基于原型链进行查找原型是否在当前实例的原型链上。无法判断值类型， null 和 
 * 3. Object.prototype.toString.call() 最佳，对结果需要进一步处理
 */

function getType(val: any) {
  const originType = Object.prototype.toString.call(val) //'[object Number]'
  const spcaceIndex = originType.indexOf(' ')
  const res = originType.slice(spcaceIndex + 1, -1)
  return res.toLowerCase()
}

// // 测试用例
// // 值类型
// console.log(getType('123'))
// // 引用类型
// console.log(getType({}))
// // null undefined
// console.log(getType(null))
// console.log(getType(undefined))
// // Map WeakMap
// console.log(getType(new Map()))
// console.log(getType(new WeakMap()))

/**
 * 手写 instanceof
 */

export function myInstanceof(instance: any, target: any) {
  let instanceProto = instance.__proto__
  const targetPrototype = target.prototype

  while (instanceProto) {
    if (instanceProto === targetPrototype) {
      return true
    }

    instanceProto = instanceProto.__proto__
  }

  return false
}


console.log(myInstanceof(() => { }, Object))