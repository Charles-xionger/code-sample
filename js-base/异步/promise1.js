const p1 = new Promise((resolve,reject) => {

})

console.log('p1', p1)

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve()
    })
})

console.log('p2', p2)

const p3 = new Promise((resolve,reject) => {
   setTimeout(() => {
       reject()
   })
})

console.log('p3', p3)
