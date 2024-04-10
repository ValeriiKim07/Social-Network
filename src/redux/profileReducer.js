const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
   profile: null
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
export const setUserProfile = profile => ({
   type: SET_USER_PROFILE,
   profile: profile
});
export const updateNewPostText = newText => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: newText
});

export default profileReducer;
