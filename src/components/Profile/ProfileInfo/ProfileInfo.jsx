import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import React, { useState } from "react";
import mainImage from "./../../../assets/images/149071.png";

const ProfileInfo = (props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        {!imageLoaded && <Preloader />}
        <img
          className={s.mainPhoto}
          src={props.profile.photos.large || mainImage}
          alt=""
          onLoad={handleImageLoad}
        />
        {props.isOwner && (
          <input type={"file"} onChange={onMainPhotoSelected} />
        )}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
