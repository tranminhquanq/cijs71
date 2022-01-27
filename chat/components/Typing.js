class Typing {
  constructor() {
    this.$typingContainer = document.createElement("div");
    this.$typingContainer.setAttribute(
      "class",
      "h-16 bg-blue-200 text-xl font-bold"
    );
    this.$typingContainer.innerText = "Typing component";
  }

  render() {
    return this.$typingContainer;
  }
}

export default Typing;
