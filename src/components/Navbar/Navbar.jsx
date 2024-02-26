import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

const setActive = ({ isActive }) => (isActive ? s.active : "");
const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={setActive} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/news">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/music">
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to="/settings">
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <div>
          <NavLink className={setActive} to="/friends">
            <span className={s.menuItem}>Friends</span>
          </NavLink>
            <div className={s.friendsItem}><Friends state={props.state.friends.slice(0, 3)}/></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
