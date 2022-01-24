import InputGroup from "../components/InputGroup.js";

class Login {
  constructor() {
    this.$formContainer = document.createElement("form");
    this.$formContainer.setAttribute(
      "class",
      "w-1/3 mx-auto mt-12 p-8 bg-blue-400 rounded-lg shadow-lg"
    );

    this.$emailGroup = new InputGroup("Email", "email", "Enter your email");
    this.$passwordGroup = new InputGroup(
      "Password",
      "password",
      "Enter your password"
    );

    this.$loginButton = document.createElement("button");
    this.$loginButton.setAttribute(
      "class",
      "py-2 px-8 rounded-lg bg-yellow-400 text-gray-600 hover:text-gray-700 hover:bg-yellow-500"
    );
    this.$loginButton.innerText = "Login";
  }

  render() {
    this.$formContainer.appendChild(this.$emailGroup.render());
    this.$formContainer.appendChild(this.$passwordGroup.render());
    this.$formContainer.appendChild(this.$loginButton);

    return this.$formContainer;
  }
}

export default Login;
