import Friends from './Friends';
import {connect} from 'react-redux';

let mapStateToProps = state => {
   return {
      friends: state.sidebar.friends
   };
};

/*let mapDispatchToProps = (dispatch) => {
  return {};
};*/

const FriendsContainer = connect(mapStateToProps, null)(Friends);

export default FriendsContainer;
