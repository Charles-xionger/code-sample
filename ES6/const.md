# const 标识常量

1. 不允许重复声明

```js
// 常量
// * 如何定义一个常量？
Object.defineProperty(window,'arg2', {
  value: 22,
  writable: false
})

// * 会不会报错，能不能修改?
arg2 = 33
// 回答: 不会报错，但是不能修改

// ES6
// * 能不能被改变?会不会报错
const arg3 = 44
arg3 = 55
// 不能改变，且会报错 Uncaught TypeError: Assignment to constant variable.

// *const 可以分开声明赋值吗？ 不可以
// const 不允许重复声明
```

2. 块级作用域
```js
const PERMIT = 'true';

if(PERMIT) {
  var arg1 = '云隐';
}
console.log(arg1);

// const
if(PERMIT) {
  const arg2 = '云隐';
}
console.log(arg2); // Uncaught ReferenceError: arg2 is not defined
```

3. 无变量提升

```js
console.log(arg3)
var arg3 = 'bobo'

// const 常量 无变量提升 需要先声明再使用
console.log(arg4)
const arg4 = 'bobo'
// Uncaught ReferenceError: arg4 is not defined

var arg5 = 'bobo'
console.log(window.arg5)

// const 不在window中
console.log(window.arg6)
```

4. dead zone 暂时性死区
```js
const PERMIT = 'true';
if(PERMIT) {
  // 暂时性死区
  console.log(arg1);
  const arg1 = '云隐';
}
```

5. let 
**let 和 const 啥时候使用**
- bad - 优先使用let，常量时候再去使用const

- prefer 优先使用const , 在大型项目中变量一般不会被改变，且数据是引用类型， 引用类型的内部属性无法被常量化

6. 附加题：
```js
// * 引用类型的内部属性无法被常量化

const obj = {
  teacher: 'bobo',
  leader: 'doudou'
}

obj.teacher = 'haha'

const arr = ['11', '22']

arr[0] = '33'

// *引用类型如何冻结 原理 - 指向地址

// 如何打破 Object.freeze();
Object.freeze(obj)
// * 此时可否被修改？ 会报错吗？不会被修改，不会报错


 // *进一步追问 - 符合类型的对象可否freeze？
 const obj2 = {
    teacher: '云隐',
    leader: '黄小杨',
    zhuawa: ['部部', '小可']
  };
  Object.freeze(obj2); // freeze无法冻结嵌套引用类型

// *如何破局
// freeze 如何 deep 化
// 思路： 嵌套变量并且逐层 freeze
function deepFreeze(obj = {}) {
  Object.freeze(obj);
  (Object.key(obj) || []).forEach(key => {
    if(type obj[key] === 'object') {
      deepFreeze(obj[key])
    }
  })
}
```

