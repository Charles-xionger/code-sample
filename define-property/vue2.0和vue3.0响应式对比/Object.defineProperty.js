// Object.defineProperty基本使用

const data = {}

let name = 'zhangsan'

Object.defineProperty(data, "name", {
  get: function () {
    console.log('get')
    return name
  },

  set: function (newValue) {
    console.log('set')
    name = newValue
  }
})

// 测试
console.log(data.name)
data.name = 'lisi'

console.log(data.name)