import styles from './navButtons.module.scss';
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';
import { TbLogin2 } from 'react-icons/tb';

const NavButtons = () => {
    return (
        <div className={styles.nav__buttons}>
            <FiSearch className={styles.searchIcon} />
            <div style={{ position: 'relative' }}>
                <IoCartOutline className={styles.cartIcon} />
                <span className={styles.cartCounter}>0</span>
            </div>
            <button className={`green-btn ` + styles.btnLogin}>
                <TbLogin2 className={styles.loginIcon} />
                Login
            </button>
        </div>
    );
};

export default NavButtons;
