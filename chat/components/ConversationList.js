import { signOut } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js";
import {
  doc,
  getDoc,
  getDocs,
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";
import { auth, db } from "../constants/commons.js";
// import { mockConversation } from "../assets/mockData.js";

import ConversationItem from "./ConversationItem.js";
import NewConversationButton from "./NewConversationButton.js";
import NewConversationModal from "./NewConversationModal.js";

class ConversationList {
  constructor(setActiveConversation) {
    this._setActiveConversation = setActiveConversation;
    console.log("this._setActiveConversation", this._setActiveConversation);
    this.$container = document.createElement("div");
    this.$container.setAttribute(
      "class",
      "w-1/4 h-screen px-4 pt-4 overflow-y-scroll"
    );
    this.$newConversationModal = new NewConversationModal();
    this.$newConversationButton = new NewConversationButton(
      this.$newConversationModal.$container
    );

    this.$signOutButton = document.createElement("button");
    this.$signOutButton.textContent = "Sign Out";
    this.$signOutButton.setAttribute(
      "class",
      "w-full px-4 py-2 text-gray-700 font-bold rounded-lg bg-yellow-400 hover:bg-yellow-500 cursor-pointer mb-4"
    );
    this.$signOutButton.addEventListener("click", this.onSignOut);

    this.createConversationFromCollections();
  }

  onSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Signed out");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  async createConversationFromCollections() {
    // // // get collection from collection
    // const conversationRef = doc(db, "conversations", "of0RHiGkXlnVHGwmZzCQ");
    // const data = await getDoc(conversationRef);
    // console.log("data", data.data());
    // __________________________________________
    // // get all document from collection
    // const conversationsRef = collection(db, "conversations");
    // const data = await getDocs(conversationsRef);
    // data.forEach((document) => {
    //   const conversationItem = new ConversationItem(document.data());
    //   this.$container.appendChild(conversationItem.render());
    // });
    // __________________________________________
    // // query document from collection (createdAt = 321)
    // const conversationsRef = collection(db, "conversations");
    // const q = query(conversationsRef, where("createdAt", "<", 1500));
    // const data = await getDocs(q);
    // data.forEach((document) => {
    //   console.log("document", document.data());
    // });
    // __________________________________________
    // listen for realtime update 1 document
    // const documentRef = doc(db, "conversations", "AoebMOf2F3JZq5pmDD7c");
    // onSnapshot(documentRef, (doc) => {
    //   console.log("Current data: ", doc.data());
    // });
    // __________________________________________
    // listen for realtime updates collection
    const conversationsRef = collection(db, "conversations");
    const q = query(
      conversationsRef,
      where("members", "array-contains", auth.currentUser.email)
    );
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const conversationDoc = {
            ...change.doc.data(),
            conversationId: change.doc.id,
          };
          const conversationItem = new ConversationItem(
            conversationDoc,
            this._setActiveConversation
          );
          this.$container.appendChild(conversationItem.render());
        }
      });
    });

    // mockConversation.forEach((conversation) => {
    //   const conversationItem = new ConversationItem(conversation);
    //   this.$container.appendChild(conversationItem.render());
    // });
  }

  render(mainContainer) {
    this.$container.appendChild(this.$newConversationButton.render());
    this.$container.appendChild(this.$newConversationModal.render());

    // for (let i = 0; i < 20; i++) {
    //   let temp = new ConversationItem(i);
    //   this.$container.appendChild(temp.render());
    // }

    // for (let i = 0; i < mockConversation.length; i++) {
    //   const conversationItem = new ConversationItem(mockConversation[i]);

    //   this.$container.appendChild(conversationItem.render());
    // }

    this.$container.appendChild(this.$signOutButton);

    mainContainer.appendChild(this.$container);
  }
}

export default ConversationList;

// Get once
