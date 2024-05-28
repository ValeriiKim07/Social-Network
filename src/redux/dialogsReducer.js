const SEND_MESSAGE = 'SEND-MESSAGE';

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
   ]
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            id: 4,
            message: action.newMessageText
         };
         return {
            ...state,
            messages: [...state.messages, newMessage]
         };

      default:
         return state;
   }
};

export const sendMessage = newMessageText => ({
   type: SEND_MESSAGE,
   newMessageText
});

export default dialogsReducer;
