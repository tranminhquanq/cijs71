import { mockMessage } from "../assets/mockData.js";
import MessageItem from "./MessageItem.js";
class MessageList {
  constructor() {
    this.$container = document.createElement("div");
    this.$container.setAttribute("class", "flex flex-1 flex-col p-4");

    this.renderMessages();
  }

  renderMessages() {
    mockMessage.forEach((msg) => {
      const messageItem = new MessageItem(msg);
      this.$container.appendChild(messageItem.render());
    });
  }

  setConversation(conversation) {
    this.$container.textContent = conversation.conversationName;
  }

  render() {
    return this.$container;
  }
}

export default MessageList;
