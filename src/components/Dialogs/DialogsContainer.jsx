import {
  sendMessageActionCreator,
  updateNewMessageText
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = (messageText) => {
    props.store.dispatch(updateNewMessageText(messageText));
  };

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      sendMessage={sendMessage}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
