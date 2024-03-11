import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you', likeCount: 15 },
        {
          id: 2,
          message: 'It`s my first post?',
          likeCount: 32
        }
      ],
      newPostText: ''
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Valerii' },
        { id: 2, name: 'Anastasiia' },
        { id: 3, name: 'Jessica' }
      ],
      messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Woof!' }
      ],
      newMessageText: ''
    },

    sidebar: {
      friends: [
        { id: 1, name: 'Valerii' },
        { id: 2, name: 'Anastasiia' },
        { id: 3, name: 'Jessica' }
      ]
    }
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

window.store = store;
export default store;
