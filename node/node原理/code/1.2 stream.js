/** 使用Stream可以实现数据的流式处理 */
// const fs = require('fs')
// /**
//  * 1. 使用 fs.createReadStream() 创建可读流
//  * 2. 通过 pipe管道的方式进行输出
//  */
// fs.createReadStream(bigFile).pipe(process.stdout)



/** Readable 创建可读流*/

// // 实例：流式消耗迭代器器中的数据。 对象数组一类可以迭代的数据
const Readable = require('stream').Readable

class ToReadable extends Readable {
  constructor(iterator) {
    super()
    this.iterator = iterator
  }

  // 子类需要实现该方法
  // 这是生产数据的逻辑
  _read () {
    const res = this.iterator.next()
    if (res.done) {
      // 当前迭代结束
      // 数据源已经消耗完了，调用`push(null)`通知流
      return this.push(null)
    }
    // 避免同步输出太多的任务，使用异步
    setTimeout(() => {
      // 通过`push`方法将数据添加到流中
      this.push(res.value + '\n')
    }, 0)
  }
}
const iterator = function (limit) {
  return {
    next: function () {
      // 当limit 是否消耗完
      if (limit--) {
        return { done: false, value: limit + Math.random() }
      }
      return { done: true }
    }
  }
}(100)

const readable = new ToReadable(iterator)

// 输入数据 readable.on()
// 监听`data`事件，一次获取一个数据
readable.on('data', data => process.stdout.write(data))

// 迭代结束 监听end事件
// 所有流式的数据均已读完
readable.on('end', () => process.stdout.write('DONE'))


// const Writable = require('stream').Writable

// const writable = Writable()

// writable._write = function (data, enc, next) {
//   process.stdout.write(data.toString().toUpperCase())

//   process.nextTick(next)
// }

// writable.on('finish', () => {
//   process.stdout.write('DONE')
// })

// writable.write('a' + '\n')
// writable.write('b' + '\n')
// writable.write('c' + '\n')

// writable.end()


// var Duplex = require('stream').Duplex

// var duplex = Duplex()

// // 重写 _read 和 _write 两个方法
// // 可读端底层读取逻辑
// duplex._read = function () {
//   this._readNum = this._readNum || 0
//   if (this._readNum > 1) {
//     // 当数据大于1 时
//     this.push(null) // 终止
//   } else {
//     this.push('' + (this._readNum++))
//   }
// }

// // 可写端底层写逻辑
// duplex._write = function (buf, enc, next) {
//   // a, b
//   process.stdout.write('_write ' + buf.toString() + '\n')
//   next()
// }

// // 0, 1
// duplex.on('data', data => console.log('ondata', data.toString()))

// duplex.write('a')
// duplex.write('b')
// duplex.write('x')

// duplex.end()



// const Readable = require('stream').Readable
// const readable = Readable({
//   objectMode: true
// })
// readable.push('a')
// readable.push('b')
// readable.push({})
// readable.push(null)
// readable.on('data', data => console.log(data))