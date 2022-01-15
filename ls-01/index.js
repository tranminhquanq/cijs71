/*
1: Default params
2: Template literals
3: Destructuring Obj + array
4: Arrow function
5: Array method + object method
*/

// 1: Default params
// regular function + arrow function
// expresstion function + declaration == regular function

// function sum(...rest) {
//   let result = 0;
//   for (let i = 0; i < rest.length; i++) {
//     result += rest[i];
//   }
//   return result;
// }

// console.log(sum(1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2));

// const sum_2 = function (a, b) {
//   return a + b;
// };

// 2: Template literals

// let str1 = "Hello";
// let str2 = "world";

// let res = `${str1} 123 ${str2}`;

// console.log(res);

// Destructuring

// let person = {
//   fullName: "Tran Minh Quang",
//   age: 23,
//   languages: ["JS", "Golang", "Java", "Dart", "C++"],
//   test: {
//     job: "SE",
//     github: "tranminhwang",
//   },
// };

// const { fullName: getName, age, languages } = person;
// console.log(fullName);

// // c1
// // const { job, github } = person.test

// // c2
// const {
//   test: { job, github },
// } = person;

// const numbers = [1, 2, 3, 4, 5];

// const [, , _alo] = numbers;

// console.log({
//   _alo,
// });

// Spread syntax (...)

// let a = {
//   name: "A",
//   age: 1,
// };

// let num1 = 1;
// let num2 = num1

// c1
// const b = Object.assign({}, a);
// const b2 = {
//   ...a,
// };
// console.log("B", b2);

// b2.name = "B";
// console.log("B", b2);
// console.log("A", a);

// let arr1 = [1, 2];
// c1
// let arr2 = [].concat(arr1);
// let arr2 = [0, 4, ...arr1, 3];

// arr2.push(3, 4, 5);
// console.log("Arr2", arr2);
// console.log("Arr1", arr1);

// // Nguyen thuy: number, string, boolean
// //

// Arrow function
// function sayHello(name, age) {
//   console.log(`Hello from sayHello ${name}, ${age}`);
// }

// const sayHello_2 = (name, age) =>
//   console.log(`Hello from sayHello_2 ${name}, ${age}`);

// sayHello("Q1", 1);
// sayHello_2("Q2", 2);

// function sum(a, b) {
//   // do something...

//   return a + b;
// }

// const res1 = sum(1, 2);
// console.log(res1);

// const sum_2 = (a, b) => {
//   // do something

//   return a + b;
// };

// const res2 = sum_2(1, 2);
// console.log(res2);

// callback function

// const btnEl = document.querySelector("#btn");

// function sayHello() {
//   console.log("hello cijs71");
// }

// btnEl.addEventListener("click", sayHello);

// function sum(numbers = [], callback) {
//   let res = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     res += numbers[i];
//   }
//   callback(res);
// }

// function print(value) {
//   console.log(value);
// }

// function add4(number) {
//   console.log(number + 4);
// }

// function sayHello(value) {
//   console.log("hello", value);
// }

// sum([1, 2, 3], print);
// sum([1, 2, 3], add4);
// sum([1, 2, 3], sayHello);

// Array method

const numbers = [1, 6, 2, 9, 8, 4, 7];
//

function myFunc(arr = []) {
  // let res = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 === 0) {
  //     res.push(arr[i]);
  //   }
  // }

  // for (let number of arr) {
  //   if (number % 2 === 0) {
  //     res.push(number);
  //   }
  // }

  // filter
  // return arr.filter((item) => item % 2 === 0);

  // map
  // let res = [];
  // for (let item of arr) {
  //   res.push(item ** 2);
  // }
  // console.log(res);

  console.log(arr);
  let res = arr.map((value) => (value += 2));
  console.log(res);

  // some
  // includes
  // find
  // findIndex
}

// const isEven = (number) => number % 2 === 0;

let a = myFunc(numbers);
// console.log(a);

// Object method

const obj = {
  name: "ABC",
  age: 20,
};

// console.log(Object.values(obj));
// Object.assign()
// Object.entries()
