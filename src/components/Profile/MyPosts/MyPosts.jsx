import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React from "react";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      message={post.message}
      likeCount={post.likeCount}
    />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let newPostText = newPostElement.current.value;
    let action = { type: "UPDATE-NEW-POST-TEXT", newText: newPostText };
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3 className={s.title}>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            className={s.textarea}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost} className={s.btn}>
            Add post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
