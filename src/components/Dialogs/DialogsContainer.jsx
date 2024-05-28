import Dialogs from './Dialogs';
import {sendMessage} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = state => {
   return {
      dialogs: state.dialogsPage.dialogs,
      messages: state.dialogsPage.messages
   };
};

export default compose(
   connect(mapStateToProps, {
      sendMessage
   }),
   WithAuthRedirect
)(Dialogs);
