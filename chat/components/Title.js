class Title {
  constructor() {
    this.$titleContainer = document.createElement("div");
    this.$titleContainer.setAttribute(
      "class",
      "h-16 sticky flex justify-between items-center px-8 bg-blue-200 text-xl font-bold"
    );

    this.$conversationName = document.createElement("h3");
    this.$conversationName.innerText = "Test conversation name";
    this.$conversationMembers = document.createElement("h3");
    this.$conversationMembers.innerText = 2;
  }

  render() {
    this.$titleContainer.appendChild(this.$conversationName);
    this.$titleContainer.appendChild(this.$conversationMembers);
    return this.$titleContainer;
  }
}

export default Title;
