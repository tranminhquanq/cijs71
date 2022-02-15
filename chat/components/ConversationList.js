import { signOut } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import { auth } from "../constants/commons.js";

import ConversationItem from "./ConversationItem.js";
import NewConversationButton from "./NewConversationButton.js";
import NewConversationModal from "./NewConversationModal.js";

class ConversationList {
  constructor() {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "w-1/4 h-screen px-4 pt-4 overflow-y-scroll"
    );
    this.$newConversationModal = new NewConversationModal();
    this.$newConversationButton = new NewConversationButton(
      this.$newConversationModal.$container
    );

    this.$signOutButton = document.createElement("button");
    this.$signOutButton.textContent = "Sign Out";
    this.$signOutButton.setAttribute(
      "class",
      "w-full px-4 py-2 text-gray-700 font-bold rounded-lg bg-yellow-400 hover:bg-yellow-500 cursor-pointer mb-4"
    );
    this.$signOutButton.addEventListener("click", this.onSignOut);
  }

  onSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Signed out");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render(mainContainer) {
    this.$container.appendChild(this.$newConversationButton.render());
    this.$container.appendChild(this.$newConversationModal.render());

    for (let i = 0; i < 20; i++) {
      let temp = new ConversationItem(i);
      this.$container.appendChild(temp.render());
    }

    this.$container.appendChild(this.$signOutButton);

    mainContainer.appendChild(this.$container);
  }
}

export default ConversationList;
