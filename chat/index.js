import Login from "./pages/Login.js";

const login = new Login();

const appEl = document.getElementById("app");

appEl.appendChild(login.render());
