const url = 'https://dss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/netdisk.1.f101a461.ZN0QYM_tKpnvR8cGzYh7mQ.jpg'

function loadImg(src) {
	return new Promise((resolve, reject) => {
		const img = document.createElement('img')
		img.onload = () => {
			resolve(img)
		}
		img.onerror = () => {
			const err = new Error(`图片加载失败 ${src}`)
			reject(err)
		}
		img.src = src
	})
}

loadImg(url).then((img) => {
	console.log(img.width)
	return img
}).then((img) => {
	console.log(img.height)
}).catch((err) => {
	console.error(err)

})