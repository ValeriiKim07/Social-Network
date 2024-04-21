import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setUserProfile} from './../../redux/profileReducer';
import {useParams} from 'react-router-dom';
import {usersAPI} from '../../api/api';

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

      usersAPI.getUser(userId).then(data => {
         this.props.setUserProfile(data);
      });
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile} />;
   }
}

let mapStateToProps = state => ({
   profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(
   withUrlDataContainerComponent
);
