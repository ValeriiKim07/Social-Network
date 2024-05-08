import Dialogs from './Dialogs';
import {sendMessage, updateNewMessageText} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';

let mapStateToProps = state => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText,
      isAuth: state.auth.isAuth
   };
};

/*let mapDispatchToProps = dispatch => {
   return {
      updateNewMessageText: messageText => {
         dispatch(updateNewMessageText(messageText));
      },
      sendMessage: () => {
         dispatch(sendMessageActionCreator());
      }
   };
};*/

const DialogsContainer = connect(mapStateToProps, {
   updateNewMessageText,
   sendMessage
})(Dialogs);

export default DialogsContainer;
