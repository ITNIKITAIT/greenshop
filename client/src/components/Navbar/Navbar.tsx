import styles from './navbar.module.scss';

const Navbar = () => {
    return (
        <ul className={styles.navbar}>
            <li className={styles.navbar__item}>Home</li>
            <li className={styles.navbar__item}>Shop</li>
            <li className={styles.navbar__item}>Plant Care</li>
            <li className={styles.navbar__item}>Blogs</li>
        </ul>
    );
};

export default Navbar;
