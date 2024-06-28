import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
import { HOME_ROUTE, SHOP_ROUTE } from '../../utils/consts';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Link className={styles.navbar__item} to={HOME_ROUTE}>
                Home
            </Link>
            <Link className={styles.navbar__item} to={SHOP_ROUTE}>
                Shop
            </Link>
            <li className={styles.navbar__item}>Plant Care</li>
            <li className={styles.navbar__item}>Blogs</li>
        </div>
    );
};

export default Navbar;
