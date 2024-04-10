const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
   dialogs: [
      {id: 1, name: 'Valerii'},
      {id: 2, name: 'Anastasiia'},
      {id: 3, name: 'Jessica'}
   ],
   messages: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'Woof!'}
   ],
   newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            id: 4,
            message: state.newMessageText
         };
         return {
            ...state,
            messages: [...state.messages, newMessage],
            newMessageText: ''
         };

      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newText
         };

      default:
         return state;
   }
};

export const sendMessage = () => ({
   type: SEND_MESSAGE
});
export const updateNewMessageText = newText => ({
   type: UPDATE_NEW_MESSAGE_TEXT,
   newText: newText
});

export default dialogsReducer;
