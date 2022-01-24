// Login, Register, Main

import Login from "./pages/Login.js";

const appEl = document.getElementById("app");
const loginPage = new Login();

appEl.appendChild(loginPage.render());
