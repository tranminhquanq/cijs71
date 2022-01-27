import { signOut } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { auth } from "../constants/commons.js";
import ConversationList from "../components/ConversationList.js";
import Chat from "../components/Chat.js";

class Main {
  constructor() {
    this.$mainContainer = document.createElement("div");
    this.$mainContainer.setAttribute("class", "flex");

    this.$conversationList = new ConversationList();
    this.$chatComponent = new Chat();

    this.$welcome = document.createElement("h1");
    this.$welcome.innerText = "Welcome to Chat";

    this.$signOutButton = document.createElement("button");
    this.$signOutButton.setAttribute(
      "class",
      "bg-yellow-300 hover:bg-yellow-400 px-8 py-2 text-gray-700 font-bold rounded-lg"
    );
    this.$signOutButton.innerText = "Sign Out";
    this.$signOutButton.addEventListener("click", this.signOut);
  }

  signOut = () => {
    signOut(auth)
      .then((response) => {
        if (response) {
          alert("You have been signed out");
        }
      })
      .catch((error) => {
        alert("Error signing out");
      });
  };

  render(container) {
    // this.$mainContainer.appendChild(this.$welcome);
    // this.$mainContainer.appendChild(this.$signOutButton);
    this.$mainContainer.appendChild(this.$conversationList.render());
    this.$mainContainer.appendChild(this.$chatComponent.render());

    container.appendChild(this.$mainContainer);
  }
}

export default Main;
