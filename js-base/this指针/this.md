### 上下文 + 作用域

#### 作用域链

```js
    let a = 'global'
    console.log(a)

    function course() {
      let b = 'zhuawa'
      console.log(b)

      session() 
      function session() {
        let c = 'this'
        console.log(c)

        teacher() 
        function teacher() {
          let d = 'yy'
          console.log(d)
        }
      }
    }
    course() 

```

### this 上下文 context

#### this 在各个场景中取什么值，是在函数执行的时候确定的，不是在函数定义的时候确定的

#### 函数直接调用 - this 指向 window

```js
function fn() {
    console.log(this)
}
fn()
```

#### 隐式绑定 - this 指向调用栈的上一级

```js
function fn() {
    console.log('隐式绑定', this.a)
}
const obj = {
  a: 1
}

obj.fn = fn
obj.fn()
```

#### 实战：

```js
const foo = {
    bar: 10,
    fn: function () {
        console.log(this.bar) // undefined
        console.log(this) // window
    },
}

const bar = foo.fn
bar()
```

#### 如何改变指向

```js

```

1. 在执行函数时，如果函数被上一级所调用，那么上下文即指向上一级
2. 否则为全局孤立，指向 window

#### console.log(O2.fn) 指向 O2

1. 人为绑定 this
2. 修改 this 指向

#### 显示绑定（call/ apply/ bind）

#### 追问： call、apply、 bind 的区别

1. 传参不同
2. 直接返回不同，最终执行返回相同

#### new

```js
class Course {
    constructor(name) {
        this.name = name
        console.log('构造函数中的this', this)
    }
    test() {
        console.log('类方法中的this', this)
    }
}
const course = new Course()
course.test()
```

#### 追问： 异步方法中的 this 指向的是什么？

```js
代码补充
```

-   1.执行 setTimeout 时，传入匿名 function 执行，效果和全局执行函数效果相同
-   2.追问：如何解决：把 function 改为无独立上下文的箭头函数即可

#### 追问： bind 原理/ 手写 bind

-   1. bind

```js
// 1.bind 挂载在哪里？ // 函数的原型上 Fuction.prototype
Function.prototype.newBind = function () {
    // 2. bind 是什么？ a. 返回函数 b. 返回原函数的执行结果 c.传参不变

    const _this = this
    const args = Array.protptype.slice.call(arguments)
    // args 特点：第一项-newThis 第二项~最后一项 -函数的传参
    const newThis = args.shift()
    return function () {
        return _this.apply(newThis, args)
    }
}
```

-   2. apply 应用 - 多传参 数组化

```js
Math.max(2, 4, 5, 6)
const arr = [2, 4, 5, 6]

let max = Math.max.apply(this.arr)
```

### this 优先级 new > 显示绑定 > 隐式绑定 > 默认

```js
function fn() {
    console.log(this)
}

const obj = {
    fn,
}

obj.fn() //obj
// 显示 > 隐式
obj.fn.bind(111)()

代码添加
```

### 聊完了作用域和上下文，如何突破作用域的束缚

#### 闭包：一个函数和它周围状态引用捆绑在一起的组合

#### 函数作为返回值场景

1. 函数作为返回值

```js
function mail() {
    let content = '信'
    return function () {
        console.log(content)
    }
}

const envelope = mail()
envelop()
```

-   函数外部获取到函数作用域内的变量值

#### 函数作为参数

```js
function envelope(fn) {
    let content = 1
    fn()
}
function mail() {
    console.log(content)
}

envelope(mail)
```

#### 函数嵌套(函数作为参数的变式)

```js
let counter = 0
function outerFn() {
    function innerFn() {
        counter++
        console.log(counter)
    }
    return innerFn()
}
```

#### 追问：事件处理（异步执行） 闭包

```js
let lis = document.getElementsByTagName('li')

for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        console.log(i)
    }
}
```

#### 追问：

#### 立即执行嵌套

```js

```

#### 立即执行遇到块级作用域

```js
let count = 0
;(function immediate() {
    if (count === 0) {
        let count = 1
        console.log(count) // 1
    }
    console.log(count) // 0
})()
```

#### 拆分执行多个闭包

```js
function createIncrement() {
    let count = 0
    function increment() {
        count++
    }
    let message = `count is ${count}`

    function log() {
        console.log(message)
    }
    return[increment, log]
}

const [increment, log] = createIncrement()
increment() // 0
increment() // 1
increment() // 2
log() // count is 0
```

#### 实现私有变量

```js
function creatStack() {
    return {
        items: [],
        push(item) {
            this.items.push(item)
        },
    }
}
const stack = {
    item: [],
    push: function () {},
}

// 改造 内部私有变量
function creatStack() {
    const items = []
    return {
        push(item) {
            items.push(item)
        },
    }
}
```
