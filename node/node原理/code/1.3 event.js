class EventEmitter1 {
  constructor() {
    this.events = {};
  }

  /**
   * @description 触发监听事件
   * @param {*} event 
   * @param  {...any} args 
   */
  emit (event, ...args) {
    const cbs = this.events[event] // 取到事件的所有callback

    // 当前事件未注册
    if (!cb) {
      console.log(`${event} 事件未注册`)
      return this
    }
    cbs.forEach(cb => cb.apply(this, ...args))
  }

  /** 创建监听事件 */
  on (event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb)
    return this;
  }

  /** 创建监听一次事件 */
  once (event, cb) {
    // 1. 包装它的回调函数，监听事件的同时将它的事件移除 
    const func = (...args) => {
      this.off(event, func)
      cb.apply(this, args)
    }
    // 2. 再执行on监听
    this.on(event, func)
    return this
  }

  /** 移除事件监听 */
  off (event, cb) {
    if (!cb) {
      this.events[event] = null
    } else {
      this.events[event] = this.events[event].filters(item => item !== cb)
    }

    return this
  }
}

// 在node 中使用 EventEmitter1 监听事件是同步的还是异步的？ 同步，以遍历的方式
const add = (a, b) => console.log(a + b)
const log = (...args) => console.log(...args)
const event = new EventEmitter1()