export function sum(a, b) {
  return a + b;
}

export const PI = Math.PI;

class User {
  constructor(objUser) {
    this.$userContainer = document.createElement("div");
    this.$userContainer.setAttribute("class", "user-item");

    this.$userAvatar = document.createElement("img");
    this.$userAvatar.src = objUser.avatar;

    this.$fullName = document.createElement("h3");
    this.$fullName.innerText = `${objUser.first_name} ${objUser.last_name}`;

    this.$userEmail = document.createElement("h5");
    this.$userEmail.innerText = objUser.email;
  }

  render() {
    this.$userContainer.appendChild(this.$userAvatar);
    this.$userContainer.appendChild(this.$fullName);
    this.$userContainer.appendChild(this.$userEmail);

    return this.$userContainer;
  }
}

export default User;
