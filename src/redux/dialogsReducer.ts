const SEND_MESSAGE = "SEND-MESSAGE";

type Dialogtype = {
  id: number;
  name: string;
};
type Messagetype = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Valerii" },
    { id: 2, name: "Anastasiia" },
    { id: 3, name: "Jessica" },
  ] as Dialogtype[],
  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Woof!" },
  ] as Messagetype[],
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state: InitialStateType = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: action.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

type sendMessageActionType = {
  type: typeof SEND_MESSAGE;
  newMessageText: string;
};

export const sendMessage = (newMessageText: string): sendMessageActionType => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
