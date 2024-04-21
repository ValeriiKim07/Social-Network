import {connect} from 'react-redux';
import {
   follow,
   setCurrentPage,
   setFollowingInProcess,
   setIsFetching,
   setTotalUsersCount,
   setUsers,
   unfollow
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true);
      usersAPI
         .getUsers(this.props.currentPage, this.props.pageSize)
         .then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
         });
   }

   onPageChanged = page => {
      this.props.setCurrentPage(page);
      this.props.setIsFetching(true);

      usersAPI.getUsers(page, this.props.pageSize).then(data => {
         this.props.setUsers(data.items);
         this.props.setIsFetching(false);
      });
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
               followingInProcess={this.props.followingInProcess}
               setFollowingInProcess={this.props.setFollowingInProcess}
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
      followingInProcess: state.usersPage.followingInProcess
   };
};

/*let mapDispatchToProps = dispatch => {
   return {
      follow: userId => {
         dispatch(followAC(userId));
      },
      unfollow: userId => {
         dispatch(unfollowAC(userId));
      },
      setUsers: users => {
         dispatch(setUsersAC(users));
      },
      setCurrentPage: pageNumber => {
         dispatch(setCurrentPageAC(pageNumber));
      },
      setTotalUsersCount: totalCount => {
         dispatch(setTotalUsersCountAC(totalCount));
      },
      setIsFetching: isFetching => {
         dispatch(setIsFetchingAC(isFetching));
      }
   };
};*/

export default connect(mapStateToProps, {
   follow,
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   setIsFetching,
   setFollowingInProcess
})(UsersContainer);
