const fs = require('fs')
async function async1 () {
  console.log('async1 start') // 2
  await async2()  // 等价于 
  // new Promise(() => {
  //   console.log('async2')
  // }).then(() => {
  //   console.log('async1 end')
  // })
  console.log('async1 end') // a 8
}
async function async2 () {
  console.log('async2')  // 3
}
console.log('script start') // 1:
setTimeout(function () {
  console.log('setTimeout0') // b-1 10
  setTimeout(function () {
    console.log('setTimeout1');  // b-2 12
  }, 0);
  setImmediate(() => console.log('setImmediate')); // b-2  11
}, 0)
fs.readFile(__filename, () => {
  setTimeout(function () {
    console.log('setTimeout2');
  }, 0);
  setImmediate(() => console.log('setImmediate1'));
})
process.nextTick(() => console.log('nextTick')); // 7
async1();
new Promise(function (resolve) {
  console.log('promise1') // 4
  resolve();
  console.log('promise2') // 5
}).then(function () {
  console.log('promise3')  // a 9
})
console.log('script end') //  6