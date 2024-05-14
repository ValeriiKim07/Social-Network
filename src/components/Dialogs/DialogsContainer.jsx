import Dialogs from './Dialogs';
import {sendMessage, updateNewMessageText} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = state => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages,
      newMessageText: state.dialogsPage.newMessageText
   };
};

export default compose(
   connect(mapStateToProps, {
      updateNewMessageText,
      sendMessage
   }),
   WithAuthRedirect
)(Dialogs);
