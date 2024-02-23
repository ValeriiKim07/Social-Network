import s from './Header.module.css';
const Header = () => {
	return (
		<header className={s.header}>
			<img
				src="https://www.lamborghini.com/sites/it-en/files/themes/custom/lambo_facelift_2019/images/logo.png"
				alt="logo"
			/>
		</header>
	);
}

export default Header;
