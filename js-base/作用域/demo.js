// 创建 10 个 `<a>` 标签 点击的时候弹出对应的序号
let i, a
for (let i = 0; i < 10; i++) {
  a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.addEventListener('click', function (e) {
    e.preventDefault()
    alert(i)
  })
  document.body.appendChild(a)
}