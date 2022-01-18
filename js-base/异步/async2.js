async function fn1() {
	return 100
}

const res1 = fn1()

console.log('res1', res1) // Promise 对象 fulfilled 状态

res1.then(data => {
	console.log('data', data)
})
