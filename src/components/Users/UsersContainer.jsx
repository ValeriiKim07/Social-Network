import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, unfollow} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = page => {
      this.props.setCurrentPage(page);
      this.props.getUsers(page, this.props.pageSize);
   };

   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
               setIsProgress={this.props.setIsProgress}
               inProgress={this.props.inProgress}
            />
         </>
      );
   }
}

let mapStateToProps = state => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      inProgress: state.usersPage.inProgress
   };
};

export default compose(
   connect(mapStateToProps, {
      follow,
      unfollow,
      setCurrentPage,
      getUsers
   }),
   WithAuthRedirect
)(UsersContainer);
