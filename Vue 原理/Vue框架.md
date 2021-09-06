### 先学 Vue2 再 Vue3  Vue3 是由 Vue 2 进化而来

### Vue 和 React 越来越接近

Vue3 Options API 对应 React Class Component

Vue3 Composition API 对应 React Hook

## Vue 使用

基本使用，组件使用—— 常用，必须会

高级特性 —— 不常用，体现深度： 满足复杂场景

Vuex 和 Vue-router 使用

### 相关面试题（原理和应用是分不开的）

1. v-show 和 v-if 的区别
2. 为何 v-for 中要用key
3. 描述 Vue 组件生命周期(父子组件)
4. Vue 组件如何通讯
5. 描述组件渲染和更新的过程
6. 双向数据绑定 v-model 的实现原理

### Vue 基本使用（必须要掌握，必会考，不全考，梳理知识点，摘出考点和要点 ，确定范围）

#### 指令、插值

* 插值、表达式
* 指令、动态属性
* v-html: 会有 XSS 风险， 会覆盖子组件

#### computed 和 watch

* computed 有缓存， data 不变则不会重新计算
* watch 如何深度监听？
* watch 监听引用类型，拿不到 oldVal

#### (回顾点)class 和 style

* 使用动态属性
* 使用驼峰写法

#### 条件渲染

- v-if v-else 用法，可使用变量，也可以使用 === 表达式
- v-if 和 v-show 的区别？
- v-if 和 v-show 的使用场景？

#### 循环（列表）渲染

- 如何遍历对象？ —— 也可以用 v-for

  ​	<font color=#45b97c > v-for 早期版本只支持遍历数组</font>

- key 的重要性。key 不能乱写（如 random 或者 index）

- v-for 和 v-if 不能一起使用！

  <font color=#45b97c >v-for 优先级比 v-if 高 ，先进行遍历循环，再判断。嵌套</font>

  

####  事件

- event参数，自定义参数

  `event.__proto__.constructor`是原始的事件对象。此处和 React 有区别（*）

  `event.target`和`event.currentTarget` 注意事件被注册到当前元素上，和 React 有区别

  1. event 是原生的
  2. 事件被注册在当前元素

- 事件修饰符，按键修饰符

  ![事件修饰符](Vue%E6%A1%86%E6%9E%B6.assets/1628037790182.png)

  ![按键修饰符](Vue%E6%A1%86%E6%9E%B6.assets/1628037830817.png)

- 【观察】事件被绑定到哪里？

![1628037869827](Vue%E6%A1%86%E6%9E%B6.assets/1628037869827.png)

#### Vue 组件使用

- Props 和 $emit （父子组件）

- 组件间通讯-自定义事件 （兄弟组件间通讯）

- 组件生命周期（必考）

  1. 单个组件

     * 挂载阶段

     * 更新阶段

     * 销毁阶段

     created 和 mounted 区别？

     beforeDestory 处理哪些内容？

  2. 父子组件

  ![1628039692316](Vue%E6%A1%86%E6%9E%B6.assets/1628039692316.png)

![1628041532529](Vue%E6%A1%86%E6%9E%B6.assets/1628041532529.png)

### Vue 高级特性

> 考察对Vue的掌握是否全面，且有深度
>
> 考察做过的项目是否有深度和复杂度（至少能用到高级特性）

- 自定义 v-model： 颜色选择器
- $nextTick：触发异步渲染，立即获取DOM元素
- slot　作用域插槽：值的透传
- 动态异步组件　详情页，不确定渲染的组件　/　异步加载，按需加载
- keep-alive　组件缓存
- mixin 多个业务组件存在重复逻辑，抽离公共逻辑

#### 自定义 v-model

```js
// 应用场景之一：父组件传入的值，子组件需要修改后返回，此时可以使用自定义 v-model
// 父组件
<CustomVModel v-model="name"/> -->

// 子组件 CustomVModel.vue
<template>
    <!-- 例如：vue 颜色选择 -->
    <input type="text"
        :value="text1"
        @input="$emit('change1', $event.target.value)"
    >
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
</template>

<script>
export default {
    model: {
        prop: 'text1', // 对应 props text1
        event: 'change1'
    },
    props: {
        text1：{
            type: String,
            default() {
                return ''
            }
        }
    }
}
</script>

```



#### $nextTick

- Vue 是异步渲染（考虑：原理是什么？）
- data 改变之后， DOM 不会立刻渲染
- $nextTick 会在DOM渲染之后被触发，以获取最新DOM节点



#### $refs

this.$refs.eleRefName 获取DOM元素



#### slot 插槽

基本使用



作用域插槽：父级作用域，通过插槽获取到子组件的数据

具名插槽

多个插槽，需要设置名字，进行区分 



#### 动态组件

`:is="component-name"`

需要根据数据，动态渲染，即组件类型不确定

应用场景：新闻详情页组件



#### [异步组件（重要）](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#ad)

import() 函数 引入组件

按需加载，异步加载大组件



#### vue 如何缓存组件  keep-alive 

缓存组件

频繁切换，不需要重复渲染

Vue 常见性能优化之一



#### Vue 组件如何抽离公共逻辑 mixin

多个组件有相同的逻辑，抽离出来

mixin 并不是完美的解决方案，会有一些问题

Vue3 提出的Composition API 旨在解决这些问题

> 存在问题：
>
> 变量来源不明确，不利于阅读
>
> 多个mixin存在会有属性命名冲突
>
> mixin 和组件之间存在多对多的关系。复杂度较高 

#### 相关的面试技巧

可以不太深入，但必须知道

知道基本使用，了解应用场景

结合自己的项目经验进行讲述



### Vuex使用

> 掌握基本概念，基本使用和API 
>
> 考察形式：state 的数据结构设计



![1628142336872](Vue%E6%A1%86%E6%9E%B6.assets/1628142336872.png)

![1628142365505](Vue%E6%A1%86%E6%9E%B6.assets/1628142365505.png)

![1628142226836](Vue%E6%A1%86%E6%9E%B6.assets/1628142226836.png)

### Vue-router 使用

路由模式： hash 、H5 history

路由配置（动态路由，懒加载）

