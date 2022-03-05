import { auth } from "../constants/commons.js";
import { formatTime } from "../utils/helper.js";
class MessageItem {
  constructor(msg) {
    this._myMessage = msg.senderId === auth.currentUser.uid;
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      `mb-8 ${this._myMessage ? "mr-0 ml-auto" : ""}`
    );

    this.$msg = document.createElement("p");
    this.$msg.textContent = msg.content;
    this.$msg.setAttribute(
      "class",
      `${
        this._myMessage ? "bg-gray-500" : "bg-indigo-500"
      } rounded-full px-4 py-2 mb-2 w-max text-white`
    );

    this.$time = document.createElement("p");
    this.$time.textContent = formatTime(msg.createdAt);
    this.$time.setAttribute("class", "text-sm text-gray-500");
  }

  render() {
    this.$container.appendChild(this.$msg);
    this.$container.appendChild(this.$time);
    return this.$container;
  }
}

export default MessageItem;
