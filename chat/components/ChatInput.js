import { addDoc } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
import { auth, messagesRef } from "../constants/commons.js";
class ChatInput {
  _activeConversation;
  constructor() {
    this.$container = document.createElement("form");
    this.$container.setAttribute("class", "mb-2");
    this.$container.addEventListener("submit", this.onSubmit);

    this.$input = document.createElement("input");
    this.$input.type = "text";
    this.$input.placeholder = "Add your message here";
    this.$input.setAttribute(
      "class",
      "w-full border-indigo-50 px-4 py-2 rounded-full bg-indigo-50"
    );
  }

  onSubmit = async (event) => {
    // event.preventDefault();
    // const newMsg = {
    //   content: this.$input.value,
    //   createdAt: new Date().valueOf(),
    //   senderId: auth.currentUser.uid,
    //   conversationId: this._activeConversation.conversationId,
    // };
    // const messageRef = collection(db, "messages");
    // addDoc(messageRef, newMsg)
    //   .then(() => {})
    //   .catch((err) => {
    //     alert(err.message);
    //   });
    try {
      event.preventDefault();
      const msgValue = this.$input.value;

      if (msgValue.trim().length !== 0) {
        const newMsg = {
          content: msgValue,
          createdAt: new Date().valueOf(),
          senderId: auth.currentUser.uid,
          conversationId: this._activeConversation.conversationId,
        };

        addDoc(messagesRef, newMsg);
        this.$input.value = "";
      }
    } catch (err) {
      alert(err.message);
    }
  };

  setConversation(conversation) {
    this._activeConversation = conversation;
  }

  render() {
    this.$container.appendChild(this.$input);
    return this.$container;
  }
}

export default ChatInput;

// collection == array []
// document == object {}

// const conversations = [
//   {
//     members: ["diemmy@gmail.com", "thayongnoi@gmail.com"],
//     conversationName: "Thien Am Ben Bo Vu Tru",
//     createdAt: "2020-05-05",
//   },
//   {
//     members: ["a@gmail.com", "b@gmail.com"],
//     conversationName: "Conversation 2",
//     createdAt: "2020-05-06",
//   },
//   {
//     members: ["a@gmail.com", "b@gmail.com"],
//     conversationName: "Conversation 2",
//     createdAt: "2020-05-06",
//   },
// ];

// const conversationItem = {
//   members: ["diemmy@gmail.com", "thayongnoi@gmail.com"],
//   conversationName: "Thien Am Ben Bo Vu Tru",
//   createdAt: "2020-05-05",
// };
