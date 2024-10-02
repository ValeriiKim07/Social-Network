import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React, { useState } from "react";
import mainImage from "./../../../assets/images/149071.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  savePhoto,
  saveProfile,
  isOwner,
  status,
  updateStatus,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => {
        setEditMode(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        {!imageLoaded && <Preloader />}
        <img
          className={s.mainPhoto}
          src={profile.photos.large || mainImage}
          alt=""
          onLoad={handleImageLoad}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            toEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, toEditMode }) => {
  return (
    <div>
      <div>{isOwner && <button onClick={toEditMode}>Edit</button>}</div>
      <div>{profile.fullName}</div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};

export default ProfileInfo;
