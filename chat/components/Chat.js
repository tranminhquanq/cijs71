import Title from "./Title.js";
import Typing from "./Typing.js";

class Chat {
  constructor() {
    this.$chatContainer = document.createElement("div");
    this.$chatContainer.setAttribute(
      "class",
      "relative flex flex-col flex-1 h-screen bg-yellow-200"
    );
    this.$temp = document.createElement("h2");
    this.$temp.setAttribute("class", "flex-1");
    this.$temp.innerText = "Chat Component";

    this.$titleComponent = new Title();
    this.$typingComponent = new Typing();
  }

  render() {
    this.$chatContainer.appendChild(this.$titleComponent.render());
    this.$chatContainer.appendChild(this.$temp);
    this.$chatContainer.appendChild(this.$typingComponent.render());
    return this.$chatContainer;
  }
}

export default Chat;
