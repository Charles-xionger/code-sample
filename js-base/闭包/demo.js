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


let content;

function envelop (fn) {
  content = 1;

  fn()
}

function mail () {
  console.log(content)
}

envelop(mail)


function print (fn) {
  let a = 200
  fn()
}
let a = 100

function fn () {
  console.log(a)
}

print(fn)