import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";

import Login from "./pages/Login.js";
import Main from "./pages/Main.js";

import { auth } from "./constants/commons.js";

class App {
  _activeScreen;
  constructor(view) {
    this.view = view;
    this.onAuthenticationListener();
  }

  onAuthenticationListener() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const mainScreen = new Main();
        this.setActiveScreen(mainScreen);
      } else {
        const loginScreen = new Login();
        this.setActiveScreen(loginScreen);
      }
    });
  }

  setActiveScreen(screen) {
    if (this._activeScreen) {
      this.view.innerHTML = "";
    }
    this._activeScreen = screen;
    screen.render(this.view);
  }
}

const view = document.getElementById("app");
const app = new App(view);

export default app;
