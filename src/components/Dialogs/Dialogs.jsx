import s from './Dialogs.module.css';
import DialogItem from './DIalogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = state.messages.map((message) => (
    <Message key={message.id} message={message.message} id={message.id} />
  ));

  let OnSendMessageClick = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let messageText = e.target.value;
    props.updateNewMessageText(messageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              placeholder='Enter your mes2ge'
              onChange={onMessageChange}
              value={state.newMessageText}
            />
          </div>
          <div>
            <button onClick={OnSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
