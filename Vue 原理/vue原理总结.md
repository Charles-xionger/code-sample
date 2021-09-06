![1628822533442](C:%5CUsers%5Cxionger%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1628822533442.png)

![1628823005157](C:%5CUsers%5Cxionger%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1628823005157.png)

![1628822914273](C:%5CUsers%5Cxionger%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1628822914273.png)

![1628823169673](vue%E5%8E%9F%E7%90%86%E6%80%BB%E7%BB%93.assets/1628823169673.png)

![1628823237373](vue%E5%8E%9F%E7%90%86%E6%80%BB%E7%BB%93.assets/1628823237373.png)

![1628823637100](vue%E5%8E%9F%E7%90%86%E6%80%BB%E7%BB%93.assets/1628823637100.png)

![1628823649151](vue%E5%8E%9F%E7%90%86%E6%80%BB%E7%BB%93.assets/1628823649151.png)

[深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)

#### 异步渲染

##### 回顾$nextTick用法

- 汇总data 的修改，一次性更新视图
- 减少DOM操作次数，提高性能

![1628832566450](vue%E5%8E%9F%E7%90%86%E6%80%BB%E7%BB%93.assets/1628832566450.png)

### 总结1

渲染和响应式的关系

渲染和模板编译的关系

渲染和vdom的关系

### 总结2

初次渲染过程（常考）

更新过程（常考）

异步渲染

![1628834918982](vue%E5%8E%9F%E7%90%86%E6%80%BB%E7%BB%93.assets/1628834918982.png)

#### 组件化

组件化的历史

数据驱动视图

MVVM

#### 响应式

`Object.defineProperty`

监听对象（深度），监听数组

Object.defineProperty的缺点

#### vdom 和 diff 

应用背景

vnode 结构

snabbdom 使用： vnode patch

#### 模板编译

with 语法

模板编译 render 函数

执行 render 函数生成 vnode

#### 组件渲染/更新过程

初次渲染

更新过程

异步渲染

#### 前端路由原理

hash

H5 history

两者对比