import {
  doc,
  setDoc,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
import { auth, db } from "../constants/commons.js";
import InputGroup from "./InputGroup.js";

class NewConversationModal {
  constructor() {
    this.$container = document.createElement("form");
    this.$container.setAttribute(
      "class",
      "hidden new-conversation-modal bg-blue-400 px-8 py-4 rounded-lg shadow-xl"
    );
    this.$container.addEventListener("submit", this.onSubmit);

    this.$conversationName = new InputGroup(
      "Conversation Name",
      "text",
      "Enter your conversation name"
    );
    this.$email = new InputGroup("Email", "text", "Enter email");

    this.$submit = document.createElement("button");
    this.$submit.textContent = "Create";
    this.$submit.type = "submit";
    this.$submit.setAttribute(
      "class",
      "bg-yellow-300 hover:bg-yellow-400 px-8 py-2 text-gray-700 font-bold rounded-lg"
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const email = this.$email.getValue();
    const conversationName = this.$conversationName.getValue();

    const newConversationDocument = {
      members: [email, auth.currentUser.email],
      conversationName,
      createdAt: new Date().valueOf(),
    };

    // using setDoc function to create a new document in the collection
    // const collectionRef = doc(db, "conversations", "hahahhaa");
    // setDoc(collectionRef, newConversationDocument);

    // using addDoc function to create a new document in the collection
    const conversationRef = collection(db, "conversations");
    addDoc(conversationRef, newConversationDocument);
  };

  render() {
    this.$container.appendChild(this.$conversationName.render());
    this.$container.appendChild(this.$email.render());
    this.$container.appendChild(this.$submit);
    return this.$container;
  }
}

export default NewConversationModal;
