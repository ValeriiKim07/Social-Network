import s from './Dialogs.module.css';
import DialogItem from './DIalogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = props => {
   let dialogsElements = props.dialogs.map(dialog => (
      <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
   ));
   let messagesElements = props.messages.map(message => (
      <Message key={message.id} message={message.message} id={message.id} />
   ));

   let addNewMessage = values => {
      props.sendMessage(values.newMessageText);
   };

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>{dialogsElements}</div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <AddMessageForm onSubmit={addNewMessage} />
         </div>
      </div>
   );
};

export default Dialogs;
