let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likeCount: 15 },
        { id: 2, message: "It`s my first post?", likeCount: 32 },
      ],
      newPostText: "textPost",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Valerii" },
        { id: 2, name: "Anastasiia" },
        { id: 3, name: "Jessica" },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Woof!" },
      ],
      newMessagePost: "test",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Valerii" },
        { id: 2, name: "Anastasiia" },
        { id: 3, name: "Jessica" },
      ],
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 4,
        message: this._state.dialogsPage.newMessagePost,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessagePost = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessagePost = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;
export default store;
