import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi, how are you", likeCount: 15 },
    { id: 2, message: "It`s my first post?", likeCount: 32 },
  ];

  let postsElements = posts.map((post) => (
    <Post id={post.id} message={post.message} likeCount={post.likeCount} />
  ));
  return (
    <div className={s.postsBlock}>
      <h3 className={s.title}>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea}></textarea>
        </div>
        <div>
          <button className={s.btn}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
