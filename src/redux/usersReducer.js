import {usersAPI} from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_PROGRESS = 'TOGGLE_IS_PROGRESS';

let initialState = {
   users: [],
   pageSize: 20,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   inProgress: []
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return {...user, followed: true};
               }
               return user;
            })
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return {...user, followed: false};
               }
               return user;
            })
         };
      case SET_USERS: {
         return {
            ...state,
            users: action.users
         };
      }
      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         };
      }
      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.totalCount
         };
      }
      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         };
      }
      case TOGGLE_IS_PROGRESS: {
         return {
            ...state,
            inProgress: action.isFetching
               ? [...state.inProgress, action.userId]
               : state.inProgress.filter(id => id !== action.userId)
         };
      }

      default:
         return state;
   }
};

export const followSucces = userId => ({
   type: FOLLOW,
   userId
});
export const unfollowSucces = userId => ({
   type: UNFOLLOW,
   userId
});
export const setUsers = users => ({
   type: SET_USERS,
   users
});
export const setCurrentPage = currentPage => ({
   type: SET_CURRENT_PAGE,
   currentPage
});
export const setTotalUsersCount = totalCount => ({
   type: SET_TOTAL_USERS_COUNT,
   totalCount
});
export const setIsFetching = isFetching => ({
   type: TOGGLE_IS_FETCHING,
   isFetching
});
export const setIsProgress = (isFetching, userId) => ({
   type: TOGGLE_IS_PROGRESS,
   isFetching,
   userId
});

export const requestUsers = (currentPage, pageSize) => {
   return dispatch => {
      dispatch(setIsFetching(true));
      usersAPI.getUsers(currentPage, pageSize).then(data => {
         dispatch(setIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
      });
   };
};
export const follow = userId => {
   return dispatch => {
      dispatch(setIsProgress(true, userId));
      usersAPI.follow(userId).then(data => {
         if (data.resultCode === 0) {
            dispatch(followSucces(userId));
         }
         dispatch(setIsProgress(false, userId));
      });
   };
};
export const unfollow = userId => {
   return dispatch => {
      dispatch(setIsProgress(true, userId));
      usersAPI.unfollow(userId).then(data => {
         if (data.resultCode === 0) {
            dispatch(unfollowSucces(userId));
         }
         dispatch(setIsProgress(false, userId));
      });
   };
};

export default usersReducer;
