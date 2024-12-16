import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getStatus,
  savePhoto,
  setUserProfile,
  updateStatus,
  saveProfile,
} from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.setUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.userId != prevProps.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  WithAuthRedirect,
)(ProfileContainer);
