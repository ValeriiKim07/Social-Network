let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you", likeCount: 15 },
      { id: 2, message: "It`s my first post?", likeCount: 32 },
    ],
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
  },
  sidebar: {
    friends: [
        /*TODO: Add path to props*/
      { id: 1, name: "Valerii" },
      { id: 2, name: "Anastasiia" },
      { id: 3, name: "Jessica" },
    ]
  }
};

export default state;
