

// const data = {
//   name: '张三',
//   age: 20,
// };

const data = ['a', 'b', 'c']

const proxyData = new Proxy(data, {
  get (target, key, receiver) {
    const ownKeys = Reflect.ownKeys(target)
    if (ownKeys.includes(key)) {
      console.log('get', key);
    }
    const result = Reflect.get(target, key, receiver);
    return result; // 返回结果
  },

  set (target, key, val, receiver) {
    // 重复数据不处理
    if (val === target[key]) return true
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
});
