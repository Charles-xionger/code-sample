var that // 全局变量
var _that
class Student {
  // constructor 里面的this 指向 的是创建的实例对象
  constructor(uname, age) {
    that = this
    console.log(this);
    this.uname = uname
    this.age = age
    this.btn = document.querySelector('button')
    this.btn.onclick = this.sing // 此时this 指向的是btn  
  }
  sing () {
    // 此时this 指向的是btn 
    console.log(this.uname) // 输出 undefined 
    console.log(that.uname) // 输出 student 
  }
  dance () {
    // 函数里面的this 指向的是实例对象 student ，指向函数的调用者
    _that = this
    console.log(this)
  }
}

const student = new Student('小明', 20)
console.log(that === student)

student.sing()
student.dance()
console.log(_that === student) // true