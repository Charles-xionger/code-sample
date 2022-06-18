const array = [1, [2, [3, 4], 5, 6], 7]

// 数组扁平化

// 遍历数组
// 如果 item 是数字，则累加
// 如果 item 是数组，则继续遍历累加

function arrayFlatten (arr) {
  const res = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      const flattenArray = arrayFlatten(item)
      flattenArray.forEach(n => res.push(n))
    } else {
      res.push(item)
    }
  })

  return res
}

// console.log(arrayFlatten(array))


function arrayFlatten1 (arr) {
  let res = []

  arr.forEach(item => {
    if (Array.isArray(item)) {
      const flatItem = arrayFlatten1(item)
      res = res.concat(flatItem)
    } else {
      res = res.concat(item)
    }
  })

  return res
}

// console.log(arrayFlatten1(array))


const arr1 = [1, 2, [10, [100, ['a', [true], 'b'], 200], 20], 3]
// 传统的解决方法
function flattenArray1 (arr) {
  return arr.toString().split(',').map(item => +item)
}

console.log(flattenArray1(arr1))