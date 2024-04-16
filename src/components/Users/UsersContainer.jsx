import {connect} from 'react-redux';
import {
   follow,
   setCurrentPage,
   setIsFetching,
   setTotalUsersCount,
   setUsers,
   unfollow
} from '../../redux/usersReducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.setIsFetching(true);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true}
         )
         .then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   onPageChanged = page => {
      this.props.setCurrentPage(page);
      this.props.setIsFetching(true);
      axios
         .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
            {withCredentials: true}
         )
         .then(response => {
            this.props.setUsers(response.data.items);
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
      isFetching: state.usersPage.isFetching
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
   setIsFetching
})(UsersContainer);
