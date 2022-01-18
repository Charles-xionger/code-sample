function multi(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num * num)
		}, 1000)
	})
}

// 场景： 数组元素乘法输出

const nums = [1, 2, 3]

nums.forEach(async (i) => {
	const res1 = await multi(i)
	console.log('res1', res1)
})

// 使用 forEach ，是 1s 之后打印出所有结果，即 3 个值是一起被计算出来的

// 要求： 按照时间间隔打印结果

!(async function() {
	for (let i of nums) {
		const res = await multi(i)
		console.log(res)
	}
})()
