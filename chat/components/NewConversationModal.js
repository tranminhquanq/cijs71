import InputGroup from "./InputGroup.js";

class NewConversationModal {
  constructor() {
    this.$container = document.createElement("form");
    this.$container.setAttribute(
      "class",
      "hidden new-conversation-modal bg-blue-400 px-8 py-4 rounded-lg shadow-xl"
    );
    this.$container.addEventListener("submit", this.onSubmit);

    this.$email = new InputGroup("Email", "text", "Enter email");

    this.$submit = document.createElement("button");
    this.$submit.textContent = "Create";
    this.$submit.type = "submit";
    this.$submit.setAttribute(
      "class",
      "bg-yellow-300 hover:bg-yellow-400 px-8 py-2 text-gray-700 font-bold rounded-lg"
    );
  }

  onSubmit = (e) => {
    e.preventDefault();
    const email = this.$email.getValue();
    console.log("Submit", email);
  };

  render() {
    this.$container.appendChild(this.$email.render());
    this.$container.appendChild(this.$submit);
    return this.$container;
  }
}

export default NewConversationModal;
