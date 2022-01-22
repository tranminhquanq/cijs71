const posts = [
  {
    title: "Free React Course for 2022",
    image:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/react2022.png",
  },
  {
    title: "Beautiful way to fetch data in React",
    image:
      "https://i0.wp.com/itsfoss.com/wp-content/uploads/2021/11/exa-features.png?w=983&ssl=1",
  },
];

class Post {
  constructor(title, imageUrl) {
    this.$postContainer = document.createElement("div");
    this.$postContainer.classList.add("post");

    this.$title = document.createElement("h2");
    this.$title.innerText = title;

    this.$postImage = document.createElement("img");
    this.$postImage.src = imageUrl;
  }

  render() {
    this.$postContainer.appendChild(this.$title);
    this.$postContainer.appendChild(this.$postImage);
    return this.$postContainer;
  }
}

const appEl = document.getElementById("app");

posts.forEach((post) => {
  const postComponent = new Post(post.title, post.image);
  appEl.appendChild(postComponent.render());
});
