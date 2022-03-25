

// 1. 在同一个 I/O 回调里， 例如读取文件

const fs = require('fs')

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout')
  }, 0)
  setImmediate(() => {
    console.log('immediate')
  })
})

// 结果：
// immediate
// timeout