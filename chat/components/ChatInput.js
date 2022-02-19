class ChatInput {
  constructor() {
    this.$container = document.createElement("form");
    this.$container.addEventListener("submit", this.onSubmit);

    this.$input = document.createElement("input");
    this.$input.type = "text";
    this.$input.placeholder = "Add your message here";
    this.$input.setAttribute(
      "class",
      "w-full border-indigo-50 px-4 py-2 rounded-full bg-indigo-50"
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log("new message");
  };

  render() {
    this.$container.appendChild(this.$input);
    return this.$container;
  }
}

export default ChatInput;

// collection == array []
// document == object {}

// const conversations = [
//   {
//     members: ["diemmy@gmail.com", "thayongnoi@gmail.com"],
//     conversationName: "Thien Am Ben Bo Vu Tru",
//     createdAt: "2020-05-05",
//   },
//   {
//     members: ["a@gmail.com", "b@gmail.com"],
//     conversationName: "Conversation 2",
//     createdAt: "2020-05-06",
//   },
//   {
//     members: ["a@gmail.com", "b@gmail.com"],
//     conversationName: "Conversation 2",
//     createdAt: "2020-05-06",
//   },
// ];

// const conversationItem = {
//   members: ["diemmy@gmail.com", "thayongnoi@gmail.com"],
//   conversationName: "Thien Am Ben Bo Vu Tru",
//   createdAt: "2020-05-05",
// };
