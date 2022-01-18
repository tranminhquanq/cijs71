// // Includes

// let numbers = [1, 2, 3, 2];
// let str = "hello world"
// let res = numbers.includes(-1)
// let res2 = str.includes("o");
// // for (let val of numbers) {
// //   if (val === 2) {
// //     res = true;
// //   }
// // }

// console.log(res2)

// indexOf - lastIndexOf

// let idxOf2 = numbers.lastIndexOf(2)
// console.log(idxOf2)
// if(idxOf2 === -1) {}

// findIndex
// let persons = [
//   { name: "a", age: 1 },
//   { name: "b", age: 2 },
//   { name: "a", age: 1 },
// ];
// // let valOf2 = persons.findIndex((person) => person.name === "a");
// // console.log(valOf2);

// let val2 = persons.find((person) => person.name === 'a');
// console.log(val2)

// some
// every
// concat
// join

// asynchronous programing

// Nodejs

// function baz() {
//   console.log("Baz function")
// }

// function foo() {
//   baz();
//   console.log("Foo function");
// }

// function run() {
//   foo();
// }

// run();

// blocking

// let coNuoc = true;

// let myPromise = new Promise((resolve, reject) => {
//   // if (coNuoc === true) {

//     resolve("Co nuoc"); //
//   // } else {
//     reject("Khong co nuoc");

//   // }
// });

// // console.log(myPromise) // pending, fulfilled,

// myPromise.then((value) => {
//   console.log(value)
//   return "Nau com";
// }).then((val2) => {
//   console.log(val2);
// }).catch((error) => {
//   console.log(error)
// })

// console.log("quet nha");

// fetch data

// function getUser() {
//   return fetch("https://reqres.in/api/users?page=2")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       let temp = data.data.map((user) => {
//         const { id, first_name, last_name, email, avatar} = user;
//         let person = {
//           id,
//           fullName: `${first_name} ${last_name}`,
//           email,
//           avatar
//         };
//         return person;
//       })
//       return temp;
//     })
//     .catch((error) => {
//       alert("Loi roi ban oi");
//     });
// }

// getUser()

// getUser().then(user => {
//   renderUser(user);
// })

// const rootEl = document.querySelector("#root");

// function renderUser(users) {
//   let usersHtml = "";

//   for (let user of users) {
//     usersHtml += `
//       <div>
//         <img src="${user.avatar}" />
//         <h2>${user.fullName}</h2>
//         <p>${user.email}</p>
//       </div>
//     `;
//   }

//   rootEl.innerHTML = usersHtml;
// }

// async function getData() {
//   try {
//     const request = await fetch("https:rs?page=2");
//     const response = await request.json();
//     return response.data;
//   } catch (error) {
//     console.log(error)
//   }
// }

// getData().then(value => {
//   console.log(value)
// }).catch(error => {
//   console.log("error", error)
// })

// async function main() {
//   const users = await getData();
//   console.log(users)
// }
// main()

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function fetchData(value, callback) {
//   await callback(value);
//   return value;
// }

// async function main() {
//   console.time("main");
//   const a = await fetchData(10000, sleep); // 10s
//   // let sum = a + 2;
//   const b = await fetchData(2000, sleep); // 3s
//   const c = await fetchData(0, sleep); // 17s
//   console.timeEnd("main"); // 15s

// }

// async function main2() {
//   console.time("main2");

//   const promies = await Promise.all(
//     [
//     fetchData(10000, sleep),
//     fetchData(2000, sleep),
//     fetchData(0, sleep)
//     ]
//   );

//   console.timeEnd("main2"); // 15s
// }

// main()
// main2()

// Class
// - This bên trong 1 phương thức (method), this luôn tham chiếu đến đối tượng đang truy cập tới phương thức đó
// This đứng bên ngoài 1 phương thức, this luôn tham chiếu đến object global
// This maf nằm bên trong 1 hàm tạo, nó đại diện cho đối tượng được tạo

// console.log(this)

// function main() {
//   console.log("main", this)
// }

// main();

// let person = {
//   // key - value
//   firstName: "Minh",
//   lastName: "Quang",
//   // method
//   getName: function () {
//     console.log(this);
//   },

//   child: {
//     childName: "Child Name",
//     age: 20,
//     childMethod: function () {
//       console.log(this)
//     }
//   }
// }

// person.getName();
// person.child.childMethod()

// let aniaml = {
//   name: "1",
//   age: 20,
// }

// let animal2 = {
//   name: "2",
//   age: 0,
// };

// let lambor = {
//   name: "Lamborghini SVJ 63",
//   color: "Yellow",
//   weight: 1200,
// }

function Car(name, color, weight) {
  this.name = name;
  this.color = color;
  this.weight = weight;

  this.run = function () {
    console.log("run", this);
    // context === this === Car

    const test = () => {
      console.log("test", this);
    };

    test();
  };
}

// let ferrari = new Car("Ferrari 488GTB", "Red", 1300);
// console.log(ferrari.name);

// ferrari.run()

// call, apply, bind

// let audi = new Car("Audi v8", "White", 1000)
// audi.run();

// console.log(ferrari)
// console.log(audi);

// const student = {
//   name: "Student",
//   age: 20,
//   log: function () {
//     console.log(this.name)
//   }
// }

// // // student.log();

// let person2 = {
//   name: "Mindx"
// }

// // let logStudent = student.log.bind(student);

// // console.log(logStudent === student.log);

// // logStudent();

// document
//   .querySelector("button")
//   .addEventListener("click", student.log.bind(person2));

// function a() {

// }

// class SmartPhone {
//   constructor(name, color, weight) {
//     this.name = name;
//     this.color = color;
//     this.weight = weight;
//   }

//   takePhoto() {
//     console.log("Take a photo");
//   }
// }

// class SamSung extends SmartPhone {
//   constructor(name, color, weight, model) {
//     super(name, color, weight);
//     this.model = model;
//   }

//   takePhoto() {
//     console.log("HAHAHHAHAHA");
//   }

//   ngheNhac() {
//     console.log("Nghe nhac");
//   }
// }
// const mySmartPhone = new SmartPhone("SmartPhone", "white", 1000);
// const samsungS7 = new SamSung("Note 10 Plus", "Black", 1000, "A");

// console.log("mySmartPhone takePhoto", mySmartPhone.takePhoto());
// // console.log("mySmartPhone ngheNhac", mySmartPhone.ngheNhac());

// console.log("samsungS7 takePhoto", samsungS7.takePhoto());
// console.log("samsungS7 ngheNhac", samsungS7.ngheNhac());

// const IPhone6 = new IPhone("IPhone 6", "gray", 600);
// console.log(IPhone6)
// console.log(IPhone6.color)
// console.log(IPhone6.name);
// console.log(IPhone6.weight);

// IPhone6.takePhoto();

// console.log(Object.getPrototypeOf(a))
// console.log(Object.getPrototypeOf(IPhone));

// JSX, hooks, life

//

class Clock {
  _intervalID;

  constructor(timer) {
    this._timer = timer;

    this.$clockContainer = document.createElement("div");

    this.$timer = document.createElement("h2");
    this.$timer.innerText = this._timer;

    this.$startBtn = document.createElement("button");
    this.$startBtn.innerText = "Start";
    this.$startBtn.addEventListener("click", this.start);

    this.$pauseBtn = document.createElement("button");
    this.$pauseBtn.innerText = "Pause";
    this.$pauseBtn.addEventListener("click", this.pause);

    this.$stopBtn = document.createElement("button");
    this.$stopBtn.innerText = "Stop";
    this.$stopBtn.addEventListener("click", this.stop);
  }

  start = () => {
    this._intervalID = setInterval(() => {
      this._timer += 1;
      this.$timer.innerText = this._timer;
    }, 1000);
  };

  pause = () => {
    if (this._intervalID !== undefined) {
      clearInterval(this._intervalID);
    }
  };

  stop = () => {
    if (this._intervalID !== undefined) {
      clearInterval(this._intervalID);
      this._timer = 0;
      this.$timer.innerText = 0;
    }
  };

  render() {
    this.$clockContainer.appendChild(this.$timer);
    this.$clockContainer.appendChild(this.$startBtn);
    this.$clockContainer.appendChild(this.$pauseBtn);
    this.$clockContainer.appendChild(this.$stopBtn);

    return this.$clockContainer;
  }
}

const rootEl = document.querySelector("#root");

for (let i = 0; i < 10; i++) {
  const myClock = new Clock(i);
  rootEl.appendChild(myClock.render());
}
