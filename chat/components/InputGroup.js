class InputGroup {
  constructor(lableName, inputType, placeholder) {
    this.$inputGroupContainer = document.createElement("div");
    this.$inputGroupContainer.setAttribute("class", "flex flex-col mb-4");

    this.$label = document.createElement("label");
    this.$label.setAttribute("class", "text-white mb-2");
    this.$label.innerText = lableName;

    this.$input = document.createElement("input");
    this.$input.setAttribute("class", "py-2 px-4 rounded-lg");
    this.$input.type = inputType;
    this.$input.placeholder = placeholder;
  }

  render() {
    this.$inputGroupContainer.appendChild(this.$label);
    this.$inputGroupContainer.appendChild(this.$input);

    return this.$inputGroupContainer;
  }
}

export default InputGroup;
