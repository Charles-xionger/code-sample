/**
 * @description LRU Least Recently Used最少使用
 * 即淘汰最近最少使用的数据，只保留最近经常使用的资源，它是一个固定容量的缓存容器
 */

class LRUCache {
  private length: number // 容量
  private data: Map<any, any> = new Map()
  constructor(length: number) {
    if (length < 1) throw new Error('invalid length')
    this.length = length
  }

  set(key: any, value: any) {
    const data = this.data

    if (data.has(key)) {
      data.delete(key)
    }
    data.set(key, value)

    if (data.size > this.length) {
      // 超出容量，将删除data中最老的数据
      const delKey = data.values().next().value
      data.delete(delKey)
    }
  }

  get(key: any) {
    const data = this.data

    // 如果 Map 中不存在key 则返回null
    if (!(data.has(key))) return null

    const value = data.get(key)
    // 更新
    data.delete(key)
    data.set(key, value)

    return value
  }
}


// 功能测试

const lruCache = new LRUCache(2)

lruCache.set(1, 1)
lruCache.set(2, 2)
console.info(lruCache.get(1))
lruCache.set(3, 3)
console.info(lruCache.get(2))