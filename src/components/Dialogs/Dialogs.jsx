import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = props.dialogsPage.messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));
  /*TODO: remove all React ref associations*/
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  let onMessageChange = () => {
    let messageText = newMessageElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newText: messageText });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElement}</div>
      <p>
        <textarea
          ref={newMessageElement}
          onChange={onMessageChange}
          value={props.dialogsPage.newMessagePost}
        />
        <button onClick={addMessage}>send message</button>
      </p>
    </div>
  );
};

export default Dialogs;
