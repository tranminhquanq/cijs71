class ConversationItem {
  constructor(conversationInfo) {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "h-18 mb-4 p-4 text-xl font-bold border rounded-lg hover:bg-gray-200 cursor-pointer"
    );

    this.$conversationName = document.createElement("h4");
    this.$conversationName.textContent = conversationInfo.conversationName;
  }

  render() {
    this.$container.appendChild(this.$conversationName);
    return this.$container;
  }
}

export default ConversationItem;
