function updateView () {
  // 触发更新视图
  console.log('视图更新')
}

// 重新定义数组原型
const oldArrayProperty = Array.prototype
// 创建新对象，原型指向 oldArrayProperty ,再扩展方法不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
  arrProto[methodName] = function () {
    updateView() // 触发视图更新
    oldArrayProperty[methodName].call(this, ...arguments)
  }
})


// 监听函数
function defineReactive (target, key, value) {
  observer(value)
  Object.defineProperty(target, key, {
    get () {
      return value
    },
    set (newValue) {
      if (newValue !== value) {
        observer(newValue)
        // 设置新值
        // 注意，value 一直在闭包中，此处设置完后， 再get时也会获取最新的值
        value = newValue

        // 触发更新视图
        updateView()
      }
    }
  })
}

function observer (target) {
  if (typeof target !== 'object' || target === null) {
    // 不是对象也不是数组
    return target
  }

  if (Array.isArray(target)) {
    target.__proto__ = arrProto
  }
  // 重新定义各个属性（for in 也可以遍历数组）
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}


// 准备数据
const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    address: '北京' // 需要深度监听
  },
  nums: [10, 20, 30]
}

// 监听数据
observer(data)

// data.name = "list"
// data.age = 21
// console.log('age', data.age);

// data.x = '100'

// data.info.address = '上海' // 深度监听
data.nums.push(4) //监听数组