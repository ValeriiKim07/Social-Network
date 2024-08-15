import s from "./users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  inProgress,
  unfollow,
  follow,
}) => {
  return (
    <div className={s.usersContainer}>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      {users.map((user) => (
        <User
          inProgress={inProgress}
          follow={follow}
          unfollow={unfollow}
          user={user}
          key={user.id}
        />
      ))}
    </div>
  );
};

export default Users;
