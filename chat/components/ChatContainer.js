import ActiveConversationTitle from "./ActiveConversationTitle.js";
class ChatContainer {
  constructor() {
    this.$chatContainer = document.createElement("div");
    this.$chatContainer.setAttribute("class", "w-3/4 h-screen border");

    this.$activeConversationTitle = new ActiveConversationTitle();
  }

  render(mainContainer) {
    this.$activeConversationTitle.render(this.$chatContainer);
    mainContainer.appendChild(this.$chatContainer);
  }
}

export default ChatContainer;
