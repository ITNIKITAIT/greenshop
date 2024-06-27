import styles from './navButtons.module.scss';
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';

const NavButtons = () => {
    return (
        <div className={styles.nav__buttons}>
            <FiSearch className={styles.searchIcon} />
            <div style={{ position: 'relative' }}>
                <IoCartOutline className={styles.cartIcon} />
                <span className={styles.cartCounter}>0</span>
            </div>
            <button className={`green-btn ` + styles.btnLogin}>Login</button>
        </div>
    );
};

export default NavButtons;
