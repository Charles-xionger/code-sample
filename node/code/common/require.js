const vm = require('vm')
const path = require('path')
const fs = require('fs')

// const pathToFile = path.resolve(__dirname, './index.js')
// const content = fs.readFileSync(pathToFile, 'utf-8')

// const wrapper = [
//   '(function(require, module, exports) {',
//   '})'
// ]

// const wrapperContent = wrapper[0] + content + wrapper[1]

// const script = new vm.Script(wrapperContent, {
//   filename: 'index.js'
// })

// const result = script.runInThisContext()
// result()
// // console.log(typeof result) // function


// 自定义 require
function r (filename) {
  const pathToFile = path.resolve(__dirname, filename)
  const content = fs.readFileSync(pathToFile, 'utf-8')

  const wrapper = [
    '(function(require, module, exports) {',
    '})'
  ]

  const wrapperContent = wrapper[0] + content + wrapper[1]

  const script = new vm.Script(wrapperContent, {
    filename: 'index.js'
  })

  const module = {
    exports: {}
  }
  const result = script.runInThisContext()
  // 递归的过程
  result(r, module, module.exports)

  return module.exports
}

global.r = r