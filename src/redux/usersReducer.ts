import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";
import { UserType } from "@/types/types.ts";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_PROGRESS = "TOGGLE_IS_PROGRESS";

let initialState = {
  users: [] as UserType[],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  inProgress: [] as number[], // array of users ids
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
        /*state.users.map((user) => {
                                                                                                                                                                                                                                                                          if (user.id === action.userId) {
                                                                                                                                                                                                                                                                            return { ...user, followed: true };
                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                          return user;
                                                                                                                                                                                                                                                                        }),*/
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_PROGRESS: {
      return {
        ...state,
        inProgress: action.isFetching
          ? [...state.inProgress, action.userId]
          : state.inProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};
type FollowSuccesActionType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSucces = (userId: number): FollowSuccesActionType => ({
  type: FOLLOW,
  userId,
});

type UnfollowSuccesActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSucces = (userId: number): UnfollowSuccesActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: UserType[];
};
export const setUsers = (users: UserType[]): SetUsersActionType => ({
  type: SET_USERS,
  users,
});
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (
  currentPage: number,
): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalCount: number;
};
export const setTotalUsersCount = (
  totalCount: number,
): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});

type SetIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const setIsFetching = (
  isFetching: boolean,
): SetIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
type SetIsProgressActionType = {
  type: typeof TOGGLE_IS_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const setIsProgress = (
  isFetching: boolean,
  userId: number,
): SetIsProgressActionType => ({
  type: TOGGLE_IS_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers =
  (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    let response = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
  };

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any,
) => {
  dispatch(setIsProgress(true, userId));
  let data = await apiMethod(userId);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(setIsProgress(false, userId));
};

export const follow = (userId: number) => (dispatch: any) =>
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followSucces,
  );

export const unfollow = (userId: number) => (dispatch: any) =>
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowSucces,
  );

export default usersReducer;
