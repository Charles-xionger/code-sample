// process.on('exit', function (code) {
//   setTimeout(function () {
//     console.log('位置1')
//   }, 0)
//   console.log('位置2=' + code)
// })

// console.log('程序执行结束')

/**
 * 执行结果：
 *       程序执行结束
 *       位置2=0
 */


console.log(this);
module.exports.foo = 5;

module.exports.xx = function () { }
console.log(this);