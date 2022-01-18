// path 模块, 来处理路径之间的问题

const path = require('path')

const resolvePath = path.resolve('a', 'b', 'c/')

const joinPath = path.join('a', 'b', 'c')

console.log(resolvePath) // c:\Users\xionger\Desktop\code\test-code\a\b\c

console.log(joinPath) // a\b\c

/**
 * 相同：都支持传入参数，然后返回拼接的路径。
 * path.resolve() 和 path.join() 之间的区别
 * 1. path.resolve() 获得相对路径的绝对路径计算  path.join() 拼接返回路径
 * 2. path.resolve('a', 'b', 'c/') => 会将 ‘/’去掉，返回有效路径
 *    path.resolve('a', 'b', 'c/a.js') => 返回文件
 *    path.join('a', 'b', 'c/') => 返回拼接好的内容，不会在意有效性
 * 
 * 在文件系统里面一般使用绝对路径，安全
 */


console.log('文件夹名称', __dirname)

console.log('文件名称', __filename)


path.extname(__filename)  //返回文件的后缀
path.basename(__filename) // 返回文件的名称
path.dirname(__filename) // 返回文件的路径