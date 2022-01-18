const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('#container')
	.append($p1)
	.append($p2)
	.append($p3)

console.log('length', $('#container').children().length)
alert('本次 call stack 结束，DOM 结构已更新，但尚未触发渲染')
// （alert 会阻断 js 执行，也会阻断 DOM 渲染，便于查看效果）
// 到此，即本次 call stack 结束后（同步任务都执行完了），浏览器会自动触发渲染，不用代码干预

// 另外，按照 event loop 触发 DOM 渲染时机，setTimeout 时 alert ，就能看到 DOM 渲染后的结果了
setTimeout(function() {
	alert('setTimeout 是在下一次 Call Stack ，就能看到 DOM 渲染出来的结果了')
})


// 微任务在DOM渲染前触发
Promise.resolve().then(() => {
	console.log('length1', $('#container').children().length) // 3
	alert('Promise then') // DOM此时渲染了吗？NO
})

// 宏任务在DOM渲染后触发

setTimeout(() => {
	console.log('length1', $('#container').children().length) // 3
	alert('setTimeout') // DOM此时渲染了吗？YES
})
