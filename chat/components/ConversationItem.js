class ConversationItem {
  constructor(conversationInfo, setActiveConversation) {
    this._conversationInfo = conversationInfo;
    this._setActiveConversation = setActiveConversation;

    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "h-18 mb-4 p-4 text-xl font-bold border rounded-lg hover:bg-gray-200 cursor-pointer"
    );
    this.$container.addEventListener("click", this.onClick);

    this.$conversationName = document.createElement("h4");
    this.$conversationName.textContent = conversationInfo.conversationName;
  }

  onClick = () => {
    this._setActiveConversation(this._conversationInfo);
  };

  render() {
    this.$container.appendChild(this.$conversationName);
    return this.$container;
  }
}

export default ConversationItem;
