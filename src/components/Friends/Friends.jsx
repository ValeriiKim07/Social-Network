import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {
  let friendItems = props.friends.map((friend) => (
    <Friend key={friend.id} id={friend.id} name={friend.name} />
  ));
  return <div className={s.friends}>{friendItems}</div>;
};

export default Friends;
