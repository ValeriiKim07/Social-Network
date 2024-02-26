import { NavLink } from "react-router-dom";
import s from "./../Friends.module.css";

const Friend = (props) => {
  const path = "/friends/" + props.id;
  return (
    <NavLink className={s.friendProfileItem} id={props.id} to={path}>
      {/*TODO: Add path to props*/}
      <img className={s.profileImg} src="http://surl.li/qxzyg" alt="" />
      <span>{props.name}</span>
    </NavLink>
  );
};

export default Friend;
