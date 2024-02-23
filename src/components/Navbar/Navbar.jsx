import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? s.activeLink : "");
const Navbar = () => {
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
    </nav>
  );
};

export default Navbar;
