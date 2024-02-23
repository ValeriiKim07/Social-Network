import s from "./Post.module.css";
const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				src="https://gamebomb.ru/files/galleries/001/b/b2/413053.jpg"
				alt=""
			/>
			{props.message}
			<div>
				<span>Like</span> {props.likeCount}
			</div>
		</div>
	);
}

export default Post;
