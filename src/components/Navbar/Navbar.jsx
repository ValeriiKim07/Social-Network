import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import FriendsContainer from '../Friends/FriendsContainer';

const setActive = ({ isActive }) => (isActive ? s.active : '');
const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={setActive} to='/profile'>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/users'>
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/dialogs'>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/news'>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/music'>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={setActive} to='/settings'>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <div>
          <NavLink className={setActive} to='/friends'>
            <span className={s.menuItem}>Friends</span>
          </NavLink>
          <div className={s.friendsItem}>
            <FriendsContainer />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
