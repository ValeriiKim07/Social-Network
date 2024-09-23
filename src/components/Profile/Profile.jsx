import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        savePhoto={savePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
