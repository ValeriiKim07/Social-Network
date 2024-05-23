import {profileAPI, usersAPI} from './../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   posts: [
      {id: 1, message: 'Hi, how are you', likeCount: 15},
      {
         id: 2,
         message: 'It`s my first post?',
         likeCount: 32
      }
   ],
   newPostText: '',
   profile: null,
   status: ''
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 3,
            message: state.newPostText,
            likeCount: 0
         };
         return {...state, posts: [...state.posts, newPost], newPostText: ''};
      }
      case UPDATE_NEW_POST_TEXT: {
         return {...state, newPostText: action.newText};
      }
      case SET_STATUS: {
         return {...state, status: action.status};
      }
      case SET_USER_PROFILE: {
         return {...state, profile: action.profile};
      }

      default:
         return state;
   }
};

export const addPost = () => ({
   type: ADD_POST
});
export const setUserProfileAC = profile => ({
   type: SET_USER_PROFILE,
   profile: profile
});
export const updateNewPostText = newText => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: newText
});

export const setStatusAC = status => ({
   type: SET_STATUS,
   status
});

export const setUserProfile = userId => {
   return dispatch => {
      usersAPI.getUser(userId).then(data => {
         dispatch(setUserProfileAC(data));
      });
   };
};
export const getStatus = userId => {
   return dispatch => {
      profileAPI.getStatus(userId).then(data => {
         dispatch(setStatusAC(data));
      });
   };
};

export const updateStatus = status => {
   return dispatch => {
      profileAPI.updateStatus(status).then(response => {
         if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status));
         }
      });
   };
};
export default profileReducer;
