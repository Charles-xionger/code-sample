/**
 * @description 柯里化函数
 */

// 示例

function add(a: number, b: number, c: number, d: number) {
  return a + b + c + d;
}

// add(1, 2, 3, 4)




function curry(fn: Function) {
  const fnArgsLength = fn.length // 传参的长度
  let args: any[] = [] // 存放传入的参数

  // ts 中，独立的函数，this 需要声明类型
  function calc(this: any, ...newArgs: any[]) {
    args = [...args, ...newArgs] // 收集传入的参数
    if (args.length < fnArgsLength) {
      // 参数长度不够
      return calc
    } else {
      // 参数长度够了，但是有超出的可能，需要对参数做有效截取
      return fn.apply(this, args.slice(0, fnArgsLength))
    }
  }

  return calc
}


const curryAdd = curry(add)

const res = curryAdd(1)(2)(3)(4)
console.log(res)