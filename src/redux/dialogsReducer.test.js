import dialogsReducer, { sendMessage } from "./dialogsReducer";

let state = {
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
};

it("after message adding id should be 4", () => {
  let action = sendMessage("hello");

  let newState = dialogsReducer(state, action);

  expect(newState.messages[3].id).toBe(4);
});
