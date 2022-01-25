import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

import InputGroup from "../components/InputGroup.js";
import Login from "./Login.js";
import app from "../index.js";
import { auth } from "../constants/commons.js";

class Register {
  constructor() {
    this.$registerContainer = document.createElement("form");
    this.$registerContainer.setAttribute(
      "class",
      "w-1/3 mx-auto mt-12 p-8 rounded-2xl bg-blue-400"
    );
    this.$registerContainer.addEventListener("submit", this.onSubmit);

    this.$displayName = new InputGroup(
      "Display Name",
      "text",
      "Enter your name"
    );
    this.$email = new InputGroup("Email", "email", "Enter your email");
    this.$password = new InputGroup(
      "Password",
      "password",
      "Enter your password"
    );
    this.$confirmPassword = new InputGroup(
      "Confirm Password",
      "password",
      "Enter your password"
    );

    this.$registerButton = document.createElement("button");
    this.$registerButton.setAttribute(
      "class",
      "bg-yellow-300 hover:bg-yellow-400 px-8 py-2 text-gray-700 font-bold rounded-lg"
    );
    this.$registerButton.type = "submit";
    this.$registerButton.innerText = "Register";

    this.$goToLoginPage = document.createElement("span");
    this.$goToLoginPage.setAttribute("class", "text-white ml-4 cursor-pointer");
    this.$goToLoginPage.innerText = "Already have an account?";
    this.$goToLoginPage.addEventListener("click", this.goToLoginPage);
  }

  goToLoginPage = () => {
    const loginScreen = new Login();
    app.setActiveScreen(loginScreen);
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = this.$email.getValue();
      const password = this.$password.getValue();
      const confirmPassword = this.$confirmPassword.getValue();
      if (password === confirmPassword) {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = response.user;
        if (user) {
          const loginScreen = new Login();
          app.setActiveScreen(loginScreen);
        }
      } else {
        alert("Passwords do not match");
      }
    } catch (error) {
      alert(error.message);
    }

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((response) => {
    //     const user = response.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  render(container) {
    this.$registerContainer.appendChild(this.$displayName.render());
    this.$registerContainer.appendChild(this.$email.render());
    this.$registerContainer.appendChild(this.$password.render());
    this.$registerContainer.appendChild(this.$confirmPassword.render());
    this.$registerContainer.appendChild(this.$registerButton);
    this.$registerContainer.appendChild(this.$goToLoginPage);

    container.appendChild(this.$registerContainer);
  }
}

export default Register;
