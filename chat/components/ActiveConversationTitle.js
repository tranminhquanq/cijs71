class ActiveConversationTitle {
  constructor() {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "h-18 flex justify-between p-4 text-xl font-bold border-b"
    );

    this.$title = document.createElement("h4");
    this.$title.textContent = "No conversation selected";

    this.$member = document.createElement("h4");
    this.$member.textContent = "0 members";
  }

  setConversation(conversation) {
    this.$title.textContent = conversation.conversationName;
    this.$member.textContent = conversation.members.length + " members";
  }

  render() {
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$member);

    return this.$container;
  }
}

export default ActiveConversationTitle;
