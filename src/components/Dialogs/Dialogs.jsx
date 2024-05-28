import s from './Dialogs.module.css';
import DialogItem from './DIalogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from 'redux-form';

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
            <AddMessageFormRedux onSubmit={addNewMessage} />
         </div>
      </div>
   );
};

const AddMessageForm = props => {
   return (
      <div>
         <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageText' placeholder='Enter your message' />
            <div>
               <button>Send</button>
            </div>
         </form>
      </div>
   );
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
