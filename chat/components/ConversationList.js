class ConversationList {
  constructor() {
    this.$conversationListContainer = document.createElement("div");
    this.$conversationListContainer.setAttribute(
      "class",
      "w-1/4 h-screen bg-red-200"
    );
    this.$temp = document.createElement("h2");
    this.$temp.innerText = "Conversation List";
  }

  render() {
    this.$conversationListContainer.appendChild(this.$temp);
    return this.$conversationListContainer;
  }
}

export default ConversationList;
