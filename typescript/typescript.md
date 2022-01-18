## 基础知识

基本类型： number， string， boolean, array ,object

```ts 
let a: number = 0;
```

1. enum 枚举

接口给前端返回一个status字段

枚举的字段属性大写，并且表上注释

```ts
/** 活动状态枚举 */
enum ActivityStatus {
  /** 未开始 */
  NOT_START = 'notStart'
  /** 已经开始 */
  STARTED = 'started'
}

const status = ActivityStatus.NOT_START
```

2. type, interface

```ts
type UserInfo = {
  name: string;
  height: number;
}

interface UserInfo {
  name: string;
  height: number;
}

const userInfo: UserInfo = {}
```

3. 联合类型 | （联合类型一次只能使用一种类型，而交叉类型 每次都是多个类型的合并类型）

4. 交叉类型 & （联合类型一次只能使用一种类型，而交叉类型 每次都是多个类型的合并类型）

```ts 
interface UserInfoA {
  name?: string;
  height?: number;
}

interface UserInfoB {
  width: number;
}
// param 既可以是 UserInfoA 或者 UserInfoB  多个类型的合并 交叉类型
// 只使用一种， 联合类型
function test(param: UserInfoA | UserInfoB ) {

}

```

5. typeof

```js
typeof 'a'  // string

```

```ts
function toArray(x: number):Array<number> {
  return [x];
}

type Func = typeof toArray // (x: number) => number[]
```

6. keyof
  ```ts
  // 可以用来获取一个对象中的所有key 值

  interface Person {
    name: string;
    age: number;
  }

  type KPerson = keyof Person; // 'name' | 'age'

  const str: KPerson = 'name'
  const str: KPerson = 'age'
  ```

  7. in 
  用来遍历枚举类型

  ```ts
  type key = "a" | "b" | "c"

  type Obj = {
    [key in keys]: any
  }
  // []  表示动态属性
  // -> { a: any, b: any, c: any }
  ```

  8. extends (常用) 继承的是类型， js中继承的是原型

  ```ts
  interface ILength {
    length: number;
  }
  // T 泛型 动态改变类型， 继承 ILength 包含 length: number  泛型的约束
  function loggingIdentity<T extends ILength>(arg: T):T {
    console.log(arg.length);
    return arg;
  }
  ```

## 高级类型 ts内部封装的类型，供大家使用

  9. Paritial

  Paritial<T> 的作用是将某个类型的属性全部变为可选项

  ```ts
  interface PageInfo {
    title: string
  }

  type OptionalPageInfo = Paritial<PageInfo>
  ```
  10. Required

  Required<T> 的作⽤用就是将某个类型⾥里里的属性全部变为必选项。

  11. Readonly

  ```ts
  interface PageInfo {
    title: string
  }

  type ReadonlyPageInfo = Readonly<PageInfo>

  const pageInfo: ReadonlyPageInfo = { title: ''}

  // 赋值会报错
  pageInfo.title = '1111'
  ```

  12. Record 

  Record<K extends keyof any, T> 的作用是将K中所有属性的值转化为 T 类型

  ```ts
  interface PageInfo {
    title: string;
  }

  type Page = "Home" | "about" | "contact";

  const x: Record<Page, PageInfo> = {
    about: { title: "xxx"},
    contact: {title: "xxx"},
    home: {title: "xxx"}
  }

  ```
13. Exclude

  Exclude<T, U> 将某个类型中属于另一个的类型移除掉

  ```ts
  type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
  type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
  ```
14. Extract

Extract<T, U>的作用是从T中提出U， 大概就是取 T 和 U的交集的意思
```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void

// () => void 没有入参和返回值
```

15. 返回值

```ts
interface UserInfo {
  name: string
}

Axios.get<UserInfo>('/info').then(res => {
  res.data.name 
})

swagger 定义 ts属性的类型导出 a.ts
```