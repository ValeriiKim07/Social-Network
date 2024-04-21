const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS';

let initialState = {
   users: [],
   pageSize: 20,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProcess: []
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
      case TOGGLE_IS_FOLLOWING_PROCESS: {
         return {
            ...state,
            followingInProcess: action.isFetching
               ? [...state.followingInProcess, action.id]
               : state.followingInProcess.filter(id => id != action.id)
         };
      }
      default:
         return state;
   }
};

export const follow = userId => ({
   type: FOLLOW,
   userId
});
export const unfollow = userId => ({
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
export const setFollowingInProcess = (isFetching, id) => ({
   type: TOGGLE_IS_FOLLOWING_PROCESS,
   isFetching,
   id
});

export default usersReducer;
