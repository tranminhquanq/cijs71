import ActiveConversationTitle from "./ActiveConversationTitle.js";
import ChatInput from "./ChatInput.js";
import MessageList from "./MessageList.js";

class ChatContainer {
  constructor() {
    this.$chatContainer = document.createElement("div");
    this.$chatContainer.setAttribute(
      "class",
      "flex flex-col w-3/4 h-screen border"
    );

    this.$activeConversationTitle = new ActiveConversationTitle();
    this.$chatInput = new ChatInput();
    this.$messageList = new MessageList();
  }

  setActiveConversation(activeConversation) {
    this.$activeConversationTitle.setConversation(activeConversation);
    this.$messageList.setConversation(activeConversation);
  }

  render(mainContainer) {
    this.$chatContainer.appendChild(this.$activeConversationTitle.render());
    this.$chatContainer.appendChild(this.$messageList.render());
    this.$chatContainer.appendChild(this.$chatInput.render());

    mainContainer.appendChild(this.$chatContainer);
  }
}

export default ChatContainer;
