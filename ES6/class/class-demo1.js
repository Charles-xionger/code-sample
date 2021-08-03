/**
 * 类
 */
class Student {
  constructor(name, number) {
    this.name = name
    this.number = number
  }

  sayHi () {
    console.log(
      `姓名 ${this.name} ,学号 ${this.number}`
    );
  }

}
// 通过 new 对象/实例
const xialuo = new Student('夏洛', 100)

console.log(xialuo.name);
console.log(xialuo.number);
xialuo.sayHi()

const madongmei = new Student('马东梅', 101)

console.log(madongmei.name);
console.log(madongmei.number);
madongmei.sayHi()