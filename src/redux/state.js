let renderEntireTree = () => {
}

let state = {
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
};
window.state = state;
export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likeCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newMessagePost,
  };
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessagePost = "";
  renderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessagePost = newText;
  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
}

export default state;
