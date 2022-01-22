import InputGroup from "../components/InputGroup.js";

class Login {
  constructor() {
    this.$loginContainer = document.createElement("form");
    this.$loginContainer.setAttribute(
      "class",
      "w-1/3 mx-auto mt-12 p-8 rounded-2xl bg-blue-400"
    );
    this.$loginContainer.addEventListener("submit", this.onSubmit);

    this.$email = new InputGroup("Email", "email", "Enter your email");
    this.$password = new InputGroup(
      "Password",
      "password",
      "Enter your password"
    );

    this.$loginBtn = document.createElement("button");
    this.$loginBtn.setAttribute(
      "class",
      "bg-yellow-300 hover:bg-yellow-400 px-8 py-2 text-gray-700 font-bold rounded-lg"
    );
    this.$loginBtn.type = "submit";
    this.$loginBtn.innerText = "Login";
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: "j2team.tranminhquang@gmail.com",
      password: "123",
    });
  };

  render() {
    this.$loginContainer.appendChild(this.$email.render());
    this.$loginContainer.appendChild(this.$password.render());

    this.$loginContainer.appendChild(this.$loginBtn);

    return this.$loginContainer;
  }
}

export default Login;
