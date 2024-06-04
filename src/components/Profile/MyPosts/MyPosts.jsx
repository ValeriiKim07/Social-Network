import Post from './Post/Post';
import s from './MyPosts.module.css';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validatirs';
import {Textarea} from '../../common/FormsControll/FormsControll';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = props => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               component={Textarea}
               className={s.textarea}
               name={'newPostText'}
               validate={[required, maxLength10]}
               placeholder={'Post message'}
            />
         </div>
         <div>
            <button>Add post</button>
         </div>
      </form>
   );
};

AddNewPostForm = reduxForm({form: 'ProfileForm'})(AddNewPostForm);

const MyPosts = props => {
   let postsElements = props.posts.map(post => (
      <Post key={post.id} id={post.id} message={post.message} likeCount={post.likeCount} />
   ));

   let onAddPost = values => {
      props.addPost(values.newPostText);
   };

   return (
      <div className={s.postsBlock}>
         <h3 className={s.title}>My posts</h3>
         <AddNewPostForm onSubmit={onAddPost} />
         <div className={s.posts}>{postsElements}</div>
      </div>
   );
};

export default MyPosts;
