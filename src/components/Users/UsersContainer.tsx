import { connect } from "react-redux";
import {
  follow,
  requestUsers,
  setCurrentPage,
  unfollow,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getCurrentPage,
  getInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/usersSelectors";
import { UserType } from "@/types/types.ts";
import { AppStateType } from "@/redux/reduxStore.ts";

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  inProgress: boolean;
  isFetching: boolean;
  totalUsersCount: number;
  users: UserType[];
};

type MapDispatchPropsType = {
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  //setIsProgress: () => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  setCurrentPage: (pageNumber: number) => void;
};

type OwnPropsType = {
  pageTitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType, any> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.pageSize);
  };

  render() {
    return (
      <>
        <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          // setIsProgress={this.props.setIsProgress}
          inProgress={this.props.inProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    inProgress: getInProgress(state),
  };
};

export default compose(
  //<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    {
      follow,
      unfollow,
      setCurrentPage,
      getUsers: requestUsers,
    },
  ),
  WithAuthRedirect,
)(UsersContainer);
