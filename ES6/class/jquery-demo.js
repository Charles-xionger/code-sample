// 手写 简易jquery 插件和 复写机制（重复造轮子）
class jQuery {
  constructor(selector) {
    const result = document.querySelector(selector)  // Dom 查询
    const length = result.length  // 长度
    for (let i = 0; i < length; i++) {
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector
  }

  get (index) {
    return this[index]
  }

  // 遍历元素
  each (fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }

  // 事件绑定
  on (type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false)
    })
  }
}

// 插件
jQuery.prototype.dialog = function (info) {
  alert(info)
}

// 复写机制
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }
  // 扩展方法
  addClass () {

  }

}