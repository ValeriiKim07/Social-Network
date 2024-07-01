import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, setUserProfile, updateStatus} from './../../redux/profileReducer';
import {useParams} from 'react-router-dom';
import {compose} from 'redux';

const withRouter = WrappedComponent => props => {
   const params = useParams();

   return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      this.props.setUserProfile(userId);
      this.props.getStatus(userId);
   }

   render() {
      return (
         <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
         />
      );
   }
}

let mapStateToProps = state => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.id,
   isAuth: state.auth.isAuth
});

export default compose(
   connect(mapStateToProps, {setUserProfile, getStatus, updateStatus}),
   withRouter
   // WithAuthRedirect
)(ProfileContainer);
