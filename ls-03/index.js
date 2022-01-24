const appEl = document.getElementById("app");

// class Post {
//   constructor(image, author, title) {
//     this.$postContainer = document.createElement("div");
//     this.$postContainer.setAttribute("class", "post-item col-md-4");

//     this.$postImage = document.createElement("img");
//     this.$postImage.src = image;
//     this.$postImage.setAttribute("class", "post-image");

//     this.$author = document.createElement("h3");
//     this.$author.innerText = author;

//     this.$postTitle = document.createElement("a");
//     this.$postTitle.innerText = title;
//     this.$postTitle.href = "#";
//   }

//   render() {
//     this.$postContainer.appendChild(this.$postImage);
//     this.$postContainer.appendChild(this.$author);
//     this.$postContainer.appendChild(this.$postTitle);

//     return this.$postContainer;
//   }
// }

// const mockData = [
//   {
//     image:
//       "https://imgproxy.k7.tinhte.vn/ddTBdWd9gK9sOVB2Jhmothf3TNAxVggI-HIEV98lIRE/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2022/01/5834921_2022-01-24_15.05.07.jpg",
//     author: "Chill With Dan",
//     title:
//       "[Chat With Dan] Mời xem livestream tối nay cùng cuHiep: Nhìn lại 1 năm qua của Tinhte",
//   },
//   {
//     image:
//       "https://imgproxy.k7.tinhte.vn/iJB-QLuNmYPeYrxyDEOSlHyMkdL84H7hk1LXuim6mCw/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2022/01/5834613_ca-sau-cover.jpg",
//     author: "Rubi Lee",
//     title:
//       "Người Thái Lan chuyển sang ăn thịt cá sấu khi giá thịt heo tăng cao",
//   },
//   {
//     image:
//       "https://imgproxy.k7.tinhte.vn/Elz9uoVPSBSfhv5r9k9ZBQe0a1ziI5HveVQo0fAJKcY/h:460/plain/https://photo2.tinhte.vn/data/attachment-files/2022/01/5834531_vu-tru-cover.jpg",
//     author: "Rubi Lee",
//     title:
//       "Năm 2021, số tiền đầu tư vào các công ty vũ trụ đạt mức kỷ lục 14.5 tỷ USD",
//   },
// ];

// mockData.forEach((postData) => {
//   const post = new Post(postData.image, postData.author, postData.title);
//   appEl.appendChild(post.render());
// });

// appEl.appendChild(post_3.render());

// class Animal {
//   constructor(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//   }

//   getInfo() {
//     return `${this.name} is ${this.age} years old and weight ${this.weight} kg`;
//   }
// }

// const dog = new Animal("Husky", 2, 10);
// const cat = new Animal("Tom", 3, 3);
// console.log(dog.getInfo());
// console.log(cat.getInfo());

// class User {
//   constructor(objUser) {
//     this.$userContainer = document.createElement("div");
//     this.$userContainer.setAttribute("class", "user-item");

//     this.$userAvatar = document.createElement("img");
//     this.$userAvatar.src = objUser.avatar;

//     this.$fullName = document.createElement("h3");
//     this.$fullName.innerText = `${objUser.first_name} ${objUser.last_name}`;

//     this.$userEmail = document.createElement("h5");
//     this.$userEmail.innerText = objUser.email;
//   }

//   render() {
//     this.$userContainer.appendChild(this.$userAvatar);
//     this.$userContainer.appendChild(this.$fullName);
//     this.$userContainer.appendChild(this.$userEmail);

//     return this.$userContainer;
//   }
// }

// const mockUser = {
//   id: 7,
//   email: "michael.lawson@reqres.in",
//   first_name: "Michael",
//   last_name: "Lawson",
//   avatar: "https://reqres.in/img/faces/7-image.jpg",
// };

// async function getUser() {
//   try {
//     const request = await fetch("https://reqres.in/api/users?page=2");
//     const response = await request.json();

//     response.data.forEach((user) => {
//       const userComponent = new User(user);
//       appEl.appendChild(userComponent.render());
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUser();

// modules

import { sum, PI } from "./helper.js";

const res1 = sum(1, 2);
console.log(res1);
console.log(PI);
