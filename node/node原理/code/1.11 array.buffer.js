// const buffer = new ArrayBuffer(8)
// console.log(buffer)

// // int16 int32
// const typedArray = new Int16Array(buffer)
// console.log(typedArray)


// const unit8 = new Uint8Array(2)
// unit8[0] = 42
// console.log(unit8)  // Uint8Array(2) [ 42, 0 ]
// console.log(unit8[0]) // 42
// console.log(unit8.BYTES_PER_ELEMENT) // 每一个元素所占的字节数 1

// const arr = new Uint8Array([21, 31]) // 传入数组
// console.log(arr)  // Uint8Array(2)[21, 31]

/**NodeJs Buffer */
// 创建一个长度为 10、且用 0 填充的 Buffer。 alloc： 分配
// const buf1 = Buffer.alloc(10)
// console.log(buf1)

// const buf2 = Buffer.alloc(10, 1)
// console.log(buf2)

// const buf3 = Buffer.allocUnsafe(10)
// console.log(buf3)

/**
 * Buffer.allocUnsafe() 使用相比 alloc() ，内存分配速度更快，分配未初始化的Buffer.
 * 可能包含潜在的旧数据
 * 包含潜在的敏感信息，造成安全漏洞问题
 * 总结：
 * 1. 有性能优势。
 * 2. 使用时需要注意，避免引入安全漏洞。因此需要使用 fill() 或 write() 重写。
 */

/** Buffer 与 字符编码 */
/** Buffer的实例一般用于表示编码字符的序列， UTF-8 Base64, 十六进制 */
const buf = Buffer.from('hello world', 'ascii')
console.log(buf) // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log(buf.toString('base64')) // aGVsbG8gd29ybGQ=