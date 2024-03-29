import Dialogs from './Dialogs';
import {
  sendMessageActionCreator,
  updateNewMessageText
} from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (messageText) => {
      dispatch(updateNewMessageText(messageText));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
