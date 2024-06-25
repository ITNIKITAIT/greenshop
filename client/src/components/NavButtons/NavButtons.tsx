import styles from './navButtons.module.scss';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';

const NavButtons = () => {
    return (
        <div className={styles.nav__buttons}>
            <CiSearch className={styles.searchIcon} />
            <div style={{ position: 'relative' }}>
                <IoCartOutline className={styles.cartIcon} />
                <span className={styles.cartCounter}>0</span>
            </div>
            <button className={`green-btn ` + styles.btnLogin}>Login</button>
        </div>
    );
};

export default NavButtons;
