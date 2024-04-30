import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, unfollow} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

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
   setCurrentPage,
   getUsers
})(UsersContainer);
