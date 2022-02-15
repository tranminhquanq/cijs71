class ActiveConversationTitle {
  constructor() {
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "h-18 flex justify-between mb-4 p-4 text-xl font-bold border-b"
    );

    this.$title = document.createElement("h4");
    this.$title.textContent = "Active Conversation";

    this.$member = document.createElement("h4");
    this.$member.textContent = "0 member";
  }

  render(chatContainer) {
    this.$container.appendChild(this.$title);
    this.$container.appendChild(this.$member);

    chatContainer.appendChild(this.$container);
  }
}

export default ActiveConversationTitle;
