## 解构 - 解开结构

```js
// 对象型
const zhuawa = {
  teacher: '云隐',
  leader: '黄小杨'
}

const teacher = zhuawa.teacher
const leader = zhuawa.leader

// es6

const { teacher, leader } = zhuawa

// 数组
const arr = ['', '', '', '']
const a = arr[0]
const b = arr[1]

const [a, b, c, d] = arr
```

### 技巧 key 结构

```js
const zhuawa = {
  teacher: {
    name: '云隐',
    age: 30
  },
  leader: '黄小杨',
  name: 'es6'
}

// 相同的属性直接取
const {
  teacher, leader, name
} = zhuawa


// 下面写法正确吗？ 不正确
const {
  teacher: {
    name,
    age
  },
   leader,
   name
} = zhuawa

// key 别名 不能重复声明
const {
  teacher: {
    name,
    age
  },
  leader,
  name:className
} = zhuawa
```

### 追问： 你在什么情况下使用过解构/使用场景

### 解构传递参数- 数组传参

```js
// 数组传参
const sum = (arr) => {
  let res = 0

  arr.forEach((each) => {
    res += each
  })

  return res
}

//  es6
const sum = ([a, b, c]) => {
  return a + b + c
}

sum([1, 1, 1])
```

### 结合初始值 , 设置默认值，增加业务逻辑

```js
const course = ({ teacher, leader, course = 'zhuawa' }) => {
  // .....
}

course({
  teacher: 'yy',
  leader: 'hxy'
  // course: 'es6'
})
```

### 返回值

```js
const getCourse = () => {
  return {
    teacher: 'yy',
    leader: 'hxy'
  }
}

const { teacher, leader } = getCourse()
// 可读性增加，但是增加了上层对底层的依赖
// 依赖底层逻辑 会影响上层业务 增加耦合
```

### 变量交换

```js
let a = 1
let b = 2
[b, a] = [a, b]
```

### json 处理
```js
    const json = '{"teacher": "云隐","leader: "黄小杨"}'

    const obj = JSON.parse(json)

    const {
      teacher,
      leader
      } = JSON.pares(json)
```

### ajax
```js
    ajax.get(URL).then(res => {
      let code = res.code;
      let data = res.data;
      let msg = res.msg;

      if (code === 0) {
        // ....
      } 
    })

// now 
    const {
      code,
      data,
      msg
    } = res;
```
