class InputGroup {
  constructor(labelName, inputType, placeholder) {
    this.$container = document.createElement("div");
    this.$container.setAttribute("class", "flex flex-col mb-4");

    this.$label = document.createElement("label");
    this.$label.setAttribute("class", "mb-2 text-white font-bold");
    this.$label.innerText = labelName;

    this.$input = document.createElement("input");
    this.$input.setAttribute("class", "py-2 px-4 rounded-lg");
    this.$input.type = inputType;
    this.$input.placeholder = placeholder;
  }

  render() {
    this.$container.appendChild(this.$label);
    this.$container.appendChild(this.$input);

    return this.$container;
  }
}

export default InputGroup;
