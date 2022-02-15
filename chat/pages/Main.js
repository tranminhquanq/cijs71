import ConversationList from "../components/ConversationList.js";
import ChatContainer from "../components/ChatContainer.js";

class Main {
  constructor() {
    this.$mainContainer = document.createElement("div");
    this.$mainContainer.setAttribute("class", "flex");

    this.$conversationList = new ConversationList();
    this.$chatContainer = new ChatContainer();
  }

  render(container) {
    this.$conversationList.render(this.$mainContainer);
    this.$chatContainer.render(this.$mainContainer);
    container.appendChild(this.$mainContainer);
  }
}

export default Main;
