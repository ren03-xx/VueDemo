const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2021-2',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '算法导论2',
        date: '2021-2',
        price: 86.00,
        count: 2
      },
      {
        id: 3,
        name: '算法导论3',
        date: '2021-2',
        price: 87.00,
        count: 3
      },
      {
        id: 4,
        name: '算法导论4',
        date: '2021-2',
        price: 88.00,
        count: 1
      },
    ]
  },
  computed:{
    totalPrice() {
      let totalprice = 0;
      //1. 普通for循环
      // for(let i = 0; i < this.books.length; i++) {
      //   totalprice += this.books[i].price * this.books[i].count
      // }

      //2. 直接调用对象for循环
      // for(let i of this.books){
      //   totalprice += i.price * i.count
      // }
      // return totalprice

      //3. 用高级函数
      return this.books.reduce(function(preValue,i){
        return preValue + i.price * i.count
      },0)
    }
  },
  methods: {
    increase(index){
      this.books[index].count++
    },
    decrease(index){
      this.books[index].count--
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  //过滤器
  filters:{
    showPrice(price){
      return '￥' + price.toFixed(2)
    }
  }
})

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
  return preValue += i
},0)
console.log(newNums3);

//4. 连续调用多次高阶函数
let total = nums.filter(function (n) {
  return n <100
}).map(function (n) {
  return n * 2
}).reduce(function (preValue,n) {
  return preValue + n
},0)
console.log(total);

//5. 使用箭头函数
let total2 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n);
console.log(total2);