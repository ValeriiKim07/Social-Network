import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from './../../redux/profileReducer';
import {Navigate, useParams} from 'react-router-dom';

const withRouter = WrappedComponent => props => {
   const params = useParams();

   return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.params.userId;
      if (!userId) {
         userId = 2;
      }
      this.props.setUserProfile(userId);
   }

   render() {
      if (this.props.isAuth) return <Navigate to='/login' />;
      return <Profile {...this.props} profile={this.props.profile} />;
   }
}

let mapStateToProps = state => ({
   profile: state.profilePage.profile,
   isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);
