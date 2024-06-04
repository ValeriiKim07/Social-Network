import {addPost} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = state => {
   return {
      posts: state.profilePage.posts
   };
};

/*let mapDispatchToProps = dispatch => {
   return {
      updateNewPostText: newPostText => {
         dispatch(updateNewPostTextActionCreator(newPostText));
      },
      addPost: () => {
         dispatch(addPostActionCreator());
      }
   };
};*/

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
