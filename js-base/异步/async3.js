// async 函数返回结果都是 Promise 对象（如果函数内没返回 Promise ，则自动封装一下）

async function fn2() {
	return new Promise(() => {});
}
console.log(fn2());

async function fn1() {
	return 100;
}
console.log(fn1());


(async function() {
	const p1 = new Promise(() => {});
	console.log(p1); // 执行 打印Promise对象
	await p1;
	console.log('p1'); // 并不执行
})();

(async function() {
	const p2 = Promise.resolve(100);
	const res = await p2;
	console.log(res); // 打印100
})();

(async function() {
	const res = await 100;
	console.log(res);
})();

(async function () {
    const p3 = Promise.reject('some err')
    const res = await p3
    console.log(res) // 不会执行
})()
