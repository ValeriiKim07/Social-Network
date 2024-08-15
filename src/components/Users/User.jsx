import s from "./users.module.css";
import userPhoto from "./../../assets/images/naruto.png";
import React from "react";
import { NavLink } from "react-router-dom";

const User = ({ user, inProgress, unfollow, follow }) => {
  return (
    <div>
      <div className={s.userInfo}>
        <NavLink to={"/profile/" + user.id}>
          <img
            className={s.userPhoto}
            src={user.photos.small != null ? user.photos.small : userPhoto}
            alt="user_photo"
          />
        </NavLink>

        <div className={s.followToggle}>
          {user.followed ? (
            <button
              disabled={inProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={inProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.usersData}>
        <div className={s.usersDetails}>
          <h3 className={s.userName}>{user.name}</h3>
          <span className={s.userStatus}>{user.status}</span>
        </div>
        <div className={s.usersLocationDetails}>
          <h4 className={s.userCity}>{"user.location.city"}</h4>
          <span className={s.userCountry}>{"user.location.country"}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
