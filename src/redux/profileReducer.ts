import { profileAPI, usersAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { PhotosType, PostType, ProfileType } from "@/types/types.ts";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likeCount: 15 },
    {
      id: 2,
      message: "It`s my first post?",
      likeCount: 32,
    },
  ] as PostType[],
  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 3,
        message: action.newPostText,
        likeCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }

    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPost = (newPostText: string): AddPostActionType => ({
  type: ADD_POST,
  newPostText,
});

type SetUserProfileACType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfileAC = (
  profile: ProfileType,
): SetUserProfileACType => ({
  type: SET_USER_PROFILE,
  profile: profile,
});

type SetStatusACType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatusAC = (status: string): SetStatusACType => ({
  type: SET_STATUS,
  status,
});

type DeletePostType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePost = (postId: number): DeletePostType => ({
  type: DELETE_POST,
  postId,
});

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const setUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getUser(userId);
  dispatch(setUserProfileAC(response));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatusAC(response));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  } catch (error) {
    debugger;
  }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile =
  (profile: ProfileType) => async (dispatch: any, getState: any) => {
    let userId = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(setUserProfile(userId));
    } else {
      dispatch(
        stopSubmit("edit-profile", {
          _error: response.data.messages[0],
        }),
      );
      return Promise.reject(response.data.messages[0]);
    }
  };

export default profileReducer;
