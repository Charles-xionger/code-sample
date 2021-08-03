const sum = (arr) => {
  let res = 0

  arr.forEach((each) => {
    res += each
  })
  return res
}
var arr = [1, 2, 3, 4]


console.log(sum(arr))