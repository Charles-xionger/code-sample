function foo (x, y) {
  return this.a + this.b + x + y
}

const obj = {
  a: 1,
  b: 2
}

// const result = foo.call(obj, 3, 4)
// console.log(result)


Function.prototype.myCall = function (context, ...args) {
  // 第一个参数（为null 或者undefined 指向window）
  context = context ? Object(context) : window
  // 将对应的函数传入该对象中
  context.fn = this
  // 获取参数并执行相应函数
  let result = context.fn(...args)
  // 消除副作用
  delete context.fn

  // 返回结果
  return result

}


// const result = foo.myCall(obj, 3, 4)
// console.log(result)

// 自定义 apply
Function.prototype.myApply = function (context, arr) {
  context = context ? Object(context) : window
  context.fn = this

  let result = arr ? context.fn(...arr) : context.fn()

  delete context.fn
  return result
}

// const result = foo.myApply(obj, [3, 4])
// console.log(result)

// 自定义mybind（简单版）

Function.prototype.myBind1 = function () {
  if (typeof (this) !== 'function') {
    throw new TypeError('传入的对象需要是函数类型')
  }

  const _this = this
  const args = Array.prototype.slice.call(arguments)
  const newThis = args.shift() // 新的this指向

  return function () {
    return _this.apply(newThis, args) // 调用apply 修改返回的函数的this指向
  }
}

// 功能增加版

Function.prototype.myBind2 = function () {
  if (typeof (this) !== 'function') {
    throw new TypeError('传入的对象需要是函数类型')
  }

  const _this = this
  const args = Array.prototype.slice.call(arguments)
  let newThis = args.shift()

  const foo = function () { }



  const fBound = function () {
    const args1 = Array.prototype.slice.call(arguments)
    newThis = this instanceof foo ? this : newThis
    return _this.apply(newThis, [...args, ...args1])
  }

  if (this.prototype) {
    foo.prototype = this.prototype
  }

  fBound.prototype = new foo()
  return fBound
}

const func = foo.myBind2(obj, 1, 2)
console.log(func())
