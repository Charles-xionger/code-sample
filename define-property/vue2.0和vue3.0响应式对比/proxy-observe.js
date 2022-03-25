// 创建响应式

function reactive (target) {
  if (typeof target !== 'object' || target == null) {
    // 不是对象或数组， 则返回
    return target
  }


  // 代理配置
  const proxyConf = {
    get (target, key, receiver) {
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get', key);
      }
      const result = Reflect.get(target, key, receiver);

      // 如果 result 是一个对象或者数组
      return reactive(result); // 返回结果
    },

    set (target, key, val, receiver) {
      // 重复数据不处理
      if (val === target[key]) return true

      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已经有的key', key)
      } else {
        console.log('新增的 key', key)
      }

      const result = Reflect.set(target, key, val, receiver);
      console.log('set', key, val);
      // console.log('result', result)
      return result; // 是否设置成功
    },

    deleteProperty (target, key) {
      const result = Reflect.deleteProperty(target, key);
      console.log('delete property', key);
      // console.log('result', result)
      return result; // 是否删除成功
    },
  }

  // 生成代理对象
  const observed = new Proxy(target, proxyConf)

  return observed
}


// 测试数据
const data = {
  name: 'zhangsan',
  age: 20,
  info: {
    city: "北京"
  }
}

const proxyData = reactive(data)
