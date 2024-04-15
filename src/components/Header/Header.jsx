import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = props => {
   return (
      <header className={s.header}>
         <img
            src='https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png'
            alt='logo'
         />
         <div className={s.loginBlock}>
            {props.isAuth ? (
               <a href='#'>{props.login}</a>
            ) : (
               <NavLink to={'/login/'}>Login</NavLink>
            )}
         </div>
      </header>
   );
};

export default Header;
