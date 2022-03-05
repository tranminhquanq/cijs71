import {
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
import MessageItem from "./MessageItem.js";
import { messagesRef } from "../constants/commons.js";
class MessageList {
  constructor() {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "flex flex-1 flex-col p-4 overflow-y-scroll"
    );
  }

  renderMessages(currentConversationId) {
    const q = query(
      messagesRef,
      where("conversationId", "==", currentConversationId)
    );

    onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          messages.push(change.doc.data());
        }
      });
      messages.sort((a, b) => a.createdAt - b.createdAt);
      messages.forEach((msg) => {
        const messageItem = new MessageItem(msg);
        this.$container.appendChild(messageItem.render());
      });
    });

    // getDocs(q).then((docs) => {
    //   docs.forEach((doc) => {
    //     const msg = doc.data();
    //     const messageItem = new MessageItem(msg);
    //     this.$container.appendChild(messageItem.render());
    //   });
    // });
  }

  setConversation(conversation) {
    this.$container.innerHTML = "";
    this.renderMessages(conversation.conversationId);
  }

  render() {
    return this.$container;
  }
}

export default MessageList;
