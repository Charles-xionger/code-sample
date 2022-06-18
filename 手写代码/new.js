/**
 * @description new 的实现原理
 * 1. 创建一个新的对象
 * 2. 将构造函数的原型赋给该对象
 * 3. 将Fn的this 指向 该对象执行代码
 * 4. 判断执行代码后，是否有返回值为对象，函数的，则返回，否则返回新创建的对象
 */

function myNew (Fn, ...args) {
  const result = Object.create({}, Fn.prototype)
  const returnResult = Fn.apply(result, args)
  if (typeof returnResult === 'object' || typeof returnResult === 'function' && returnResult != null) {
    return returnResult
  }

  return result
}

function Fun () {
  this.a = 10;
  this.b = 20;
  return {
    d: 100
  }
}
Fun.prototype = {
  method: () => {
    console.log('原型上的method被访问');
  }
}
const fun1 = new Fun();
console.log(fun1); // { a: 10, b: 20 }
const fun2 = myNew(Fun);
console.log(fun2); // { a: 10, b: 20 }