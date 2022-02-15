import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

import Register from "./Register.js";
import Main from "./Main.js";
import InputGroup from "../components/InputGroup.js";
import app from "../index.js";
import { auth } from "../constants/commons.js";

class Login {
  constructor() {
    this.$loginContainer = document.createElement("form");
    this.$loginContainer.setAttribute(
      "class",
      "w-1/3 mx-auto mt-12 p-8 rounded-2xl bg-blue-400"
    );
    this.$loginContainer.addEventListener("submit", this.onSubmit);

    this.$email = new InputGroup("Email", "text", "Enter your email");
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

    this.$goToRegisterPage = document.createElement("span");
    this.$goToRegisterPage.setAttribute(
      "class",
      "text-white ml-4 cursor-pointer"
    );
    this.$goToRegisterPage.innerText = "Don't have an account?";
    this.$goToRegisterPage.addEventListener("click", this.goToRegisterPage);
  }

  goToRegisterPage = () => {
    const registerScreen = new Register();
    app.setActiveScreen(registerScreen);
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = this.$email.getValue();
      const password = this.$password.getValue();

      if (email.length === 0) {
        this.$email.setErrorMsg("Email is required");
      } else {
        this.$email.setErrorMsg("");
      }

      if (password.length === 0) {
        this.$password.setErrorMsg("Password is required");
      } else {
        this.$password.setErrorMsg("");
      }

      if (email && password) {
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = response.user;
        if (user) {
          alert("Login Successful");
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render(container) {
    this.$loginContainer.appendChild(this.$email.render());
    this.$loginContainer.appendChild(this.$password.render());
    this.$loginContainer.appendChild(this.$loginBtn);
    this.$loginContainer.appendChild(this.$goToRegisterPage);

    container.appendChild(this.$loginContainer);
  }
}

export default Login;
