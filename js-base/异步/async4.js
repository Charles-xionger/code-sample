// await 本质 await是同步的写法，但本质上还是异步调用

async function async1() {
	console.log('async1 start') // 2
	await async2()
	console.log('async1 end') // 5
}

async function async2() {
	console.log('async2') // 3
}

console.log('script start') // 1

async1()

console.log('script end') // 4


/*
			 script start
async4.js:4  async1 start
async4.js:10 async2
async4.js:17 script end
async4.js:6  async1 end
*/

// 结论： 在函数中，await 这一行之后的代码相当于放在 callback 中， 异步执行