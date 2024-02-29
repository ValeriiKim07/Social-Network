import s from "./Post.module.css";
const Post = (props) => {
	return (
		<div className={s.item}>
			<img
				src="https://surl.li/qxzyg"
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
