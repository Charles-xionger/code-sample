// 1. Object.defineProperty 什么意思？
// 字面上 object: 对象
// define: 定义， property 属性 对象的key 与之相比较的 attribute

// 2. 定义
// 官方定义： Object.defineProperty() 方法会直接在一个对象上定义一个新属性
// 或者修改一个对象现有属性，并返回此对象

// var obj = {}

// var newObj = Object.defineProperty(obj, 'a', {
//   value: 2
// })

// console.log(newObj === obj) // true

// 3. 调用

// var obj = {}

// console.log(obj.defineProperty) // undefined
// console.log(Object.defineProperty) // [Function: defineProperty]

// defineProperty 是 Object构造函数上挂载的静态方法

// 参数
// Object.defineProperty(obj, prop, descriptor)
//  对象obj, 属性 a, descriptor： 描述符  { value： 1}

// var obj = {}

// Object.defineProperty(obj, 'a', {
//   value: 1
// })

// // obj.a = 2 // 默认不可更改
// // delete obj.a // 默认不可删除
// // console.log(obj)

// for (let k in obj) {
//   console.log(k, obj[k])  // 默认不可枚举
// }

// 5. descriptor 特点 {}
/**
 * {
 *  数据描述符，存储描述符
 *
 * }
 */


// var obj = {}

// Object.defineProperty(obj, 'a', {
//   value: 1,
//   configurable: true,
//   enumerable: true,
//   writable: true
// })

// obj.a = 2
// delete obj.a
// console.log(obj)
// for (let key in obj) {
//   console.log(key, obj[key])
// }


// getter setter

// var obj = {}

// Object.defineProperty(obj, 'a', {
//   get () {
//     console.log('get a', 1)
//     return 1
//   },
//   set (newValue) {
//     console.log('set a:', newValue)
//   }
// })
// console.log(obj.a) // 1

// obj.a = 2


// var obj = {}

// Object.defineProperty(obj, 'a', {
//   value: 1
// })
// console.log(Object.keys(obj)) //Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
// console.log(Object.getOwnPropertyNames(obj))


// Object.defineProperty 初衷是什么？
// 更加具体的去描述或者设置一个对象内部的操作性

// 假设一个场景：后端返回的数据，要求对某一些属性不可修改， 某些属性不可枚举......
// 尤其是配置相关的属性和数据

// 架构师，底层核心代码，造轮子，
