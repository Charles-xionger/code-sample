const http = require('http')

const proxy = http.createServer((req, res) => {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'text/plain')
  res.writeHead(200, { 'x-bo': 'hello' })
  res.end('hello world')
})

proxy.listen(3000, '127.0.0.1', () => {
  console.log('server start')
})