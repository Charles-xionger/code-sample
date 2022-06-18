/**
 * @descripition lazy-man
 */

class LazyMan {
  private name: string
  private tasks: Function[] = [] // 任务列表
  constructor(name: string) {
    this.name = name

    setTimeout(() => {
      this.next()
    })
  }

  private next() {
    //TODO
    // 将任务列表中的第一个任务取出
    const task = this.tasks.shift()
    if (task) task()
  }

  eat(food: string) {
    const task = () => {
      console.log(`${this.name} eat ${food}`)
      this.next()
    }

    this.tasks.push(task)

    return this
  }

  sleep(second: number) {
    const task = () => {
      console.log(`${this.name} 开始睡了`)
      setTimeout(() => {
        console.log(`${this.name}已经${second}钟了`)
        this.next()
      }, second * 1000)
    }

    this.tasks.push(task)
    return this
  }
}

const me = new LazyMan('波比')

me.eat('苹果').eat('香蕉').sleep(5).eat('葡萄')