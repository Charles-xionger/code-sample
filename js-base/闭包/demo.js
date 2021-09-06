// function CoolModule () {
//   var something = "cool";
//   var another = [1, 2, 3];
//   function doSomething () {
//     console.log(something);
//   }
//   function doAnother () {
//     console.log(another.join(" ! "));
//   }
//   return {
//     doSomething: doSomething,
//     doAnother: doAnother
//   };
// }
// var foo = CoolModule();
// foo.doSomething(); // cool
// foo.doAnother(); // 1 ! 2 ! 3


// let content;

// function envelop (fn) {
//   content = 1;

//   fn()
// }

// function mail () {
//   console.log(content)
// }

// envelop(mail)


// function print (fn) {
//   let a = 200
//   fn()
// }
// let a = 100

// function fn () {
//   console.log(a)
// }

// print(fn)


// // 函数作为返回值

// function create () {
//   let a = 100
//   return function () {
//     console.log(a)
//   }
// }

// const fn = create()

// const a = 200

// fn() // 100  

// 函数作为参数被传递

function print () {
  let a = 200
  fn()
}
let a = 100

function fn () {
  console.log(a)
}

print(fn) // 100

// 自由变量的查找是在函数定义的地方，向上查找
// 不是在执行的地方