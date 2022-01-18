const fs = require('fs')
const path = require('path')

const pathToFile = path.resolve(__dirname, './text')
// fs.readFile(): 读取文件的内容。相关方法：fs.read()。读取绝对路径，安全性

// error fist
fs.readFile(pathToFile, 'utf-8', function (err, result) {
  if (err) {
    console.log('error', err)
    return err;
  }

  console.log('result', result)
})
// fs.readFileSync() 同步的模块读取文件
const content = fs.readFileSync(pathToFile, 'utf-8')
console.log('sync content', content)



/**
 * promise封装函数
 * @param {*} func 
 * @returns 
 */
function promisify (func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      args.push(function (err, result) {
        if (err) return reject(err);
        return resolve(result);
      });
      return func.apply(func, args)
    })
  }
}
// promisify 使用
const readFileAsync = promisify(fs.readFile);

readFileAsync(pathToFile, 'utf-8')
  .then(content => {
    console.log(content)
  }).catch(e => {
    console.log(e)
  })