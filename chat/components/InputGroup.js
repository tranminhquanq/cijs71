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

    this.$errorMsg = document.createElement("span");
    this.$errorMsg.setAttribute("class", "text-white text-sm");
  }

  getValue() {
    return this.$input.value;
  }

  setErrorMsg(msg) {
    this.$errorMsg.innerText = msg;
  }

  render() {
    this.$container.appendChild(this.$label);
    this.$container.appendChild(this.$input);
    this.$container.appendChild(this.$errorMsg);

    return this.$container;
  }
}

export default InputGroup;
