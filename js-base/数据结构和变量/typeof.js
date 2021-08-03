// typeof 能判断哪些数据类型

// typeof 能判断值类型
//  String Number Boolean null undefined Symbol
let a;
console.log(typeof a) // undefined
let str = '100'
console.log(typeof str) // String
let n = 100
console.log(typeof n) // Number
const b = true
console.log(typeof b) // Boolean
const s = Symbol('s')
console.log(typeof s) // Symbol



// typeof 能判断 函数

console.log(typeof console.log);

console.log(function () { })


// 能识别引用类型 Object (不能继续识别)

console.log(typeof null);
console.log(typeof ['s', 'b']);
console.log(typeof { a: 100 });