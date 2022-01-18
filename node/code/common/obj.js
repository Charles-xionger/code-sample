/**
 * exports.key = "hello"
 * 
 * module.exports = 'hello'
 * 
 * 但是 exports = 'hello' 不可以？
 */

// const module = {
//   exports: {}
// }


const obj = {
  key: ''
}

obj.key = "jack" // 可以修改

const key = obj.key

key.key1 = "bobo" // 可以修改


// key = "hello" //不存在引用关系，所以无法导出

// commonjs 源码在 node/lib/internal/modules/cjs