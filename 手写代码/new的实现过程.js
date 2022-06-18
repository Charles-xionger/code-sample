// new 的作用是通过构造函数来创建一个实例对象

// new 过程 四步

// 1. 创建一个新对象
// 2. 将对象的__proto__ 属性指向该构造函数的原型， 即Fn.prototypr
// 3. 将执行上下文（this）绑定到新创建的对象中
// 4. 如果构造函数有返回值（对象或者函数），那么返回值将取代第一步中新创建的对象

function myNew (Fn, ...args) {
  const result = {};
  if (Fn.prototype != null) {
    Object.setPrototypeOf(result, Fn.prototype)
  }

  const returnResult = Fn.apply(result, args)
  if (typeof returnResult === 'object' || typeof returnResult === 'function' && returnResult !== null) {
    return returnResult
  }
  return result
}


// 第四步，测试用例

function Fun () {
  this.a = 10
  this.b = 20
  return function () {
    this.c = 40
  }
}

Function.prototype = {
  method: () => {
    console.log('原型上的method被访问')
  }
}

const fun = new Fun()
