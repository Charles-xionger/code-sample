let middleware = []
middleware.push((next) => {
  console.log(1)
  next()
  console.log(1.1)
})
middleware.push((next) => {
  console.log(2)
  next()
  console.log(2.1)
})
middleware.push((next) => {
  console.log(3)
  next()
  console.log(3.1)
})
function compose (middleware) {
  const copyMiddlewares = [...middleware]

  let index = 0

  const fn = () => {
    if (index >= copyMiddlewares.length) return
    const middleware = copyMiddlewares[index]
    index++
    return middleware(fn) // 返回middleware的执行结果
  }
  return fn
}
// 实现compose函数
let fn = compose(middleware)
fn()