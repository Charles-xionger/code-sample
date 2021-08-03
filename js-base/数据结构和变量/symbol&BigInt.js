// 数据类型 Symbol

let sym = Symbol();
console.log(sym); // Symbol()
let sym1 = Symbol("sym");
let sym2 = Symbol("sym");
console.log(sym1); // Symbol(sym1)
console.log(sym1 === sym2); // false

// ES10 2020 BigInt 
// Number 精度范围： 2^-53 ~ 2^53 超出精度范围 会发生精度丢失
// BigInt 通过在整数值末尾添加 n 或者是调用 BigInt(val) 的方式来创建
// 在使用函数创建时，同样注意不能在函数前使用 new 操作符，这一点与 Symbol 类型是一样的
// 创建 BigInt 值
let bNum1 = 9007199254740991n;
let bNum2 = BigInt(2);
console.log(bNum1 + bNum2); // 9007199254740993n;
// 使用 Number 运算
console.log(9007199254740991 + 2); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
// 需要注意 BigInt 类型只能与同类型值进行计算，否则会报错，这点与 Number 类型也是有差异的。
// console.log(1 + 1n);  // Cannot mix BigInt and other types, use explicit conversions

console.log(typeof undefined);