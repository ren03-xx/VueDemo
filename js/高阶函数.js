//编程范式： 命令式编程/声明式编程
//编程范式： 面向对象编程/函数式编程

//filter、map、reduce
//filter：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//        当返回false时，函数内部会过滤掉这次的n
const nums = [10,20,50,111,34,222,34];

//1. filter使用
let newNums = nums.filter(function (n) {
  return n < 100
});
console.log(newNums);

//2. map使用
let newNums2 = newNums.map(function (n) {
      return n * 2
});
console.log(newNums2);

//3. reudce使用
let newNums3 = newNums2.reduce(function (preValue,i) {
  return preValue + i
},0);
console.log(newNums3);

//4. 连续调用多次高阶函数
let total = nums.filter(function (n) {
  return n <100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue,n) {
  return preValue + n
},0);
console.log(total);

//5. 使用箭头函数
let total2 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n);
console.log(total2);

//可在购物车.js中调用查看