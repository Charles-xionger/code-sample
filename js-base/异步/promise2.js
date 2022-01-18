const p1 = Promise.resolve().then(() => {
    return 100
})

console.log('p1', p1) // resolved 触发后续 then 回调

p1.then(() => {
    console.log('123')
})

// then() 里抛出错误，会返回 rejected 状态的 promise
const p2 = Promise.resolve().then(() => {
    throw new Error('err')
})

p2.catch((e) => {
    console.log(e)
})

// catch() 不抛出错误，会返回 resolved 状态的 promise
const p3 = Promise.reject().catch(() => {
    console.error('catch some error')
    throw new Error('err')
})
console.log('p3', p3) //\

