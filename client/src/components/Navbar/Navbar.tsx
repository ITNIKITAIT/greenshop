import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.scss';
import { HOME_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { useEffect, useMemo, useState } from 'react';

type Page = 'home' | 'shop';

const Navbar = () => {
    const [currPage, setCurrPage] = useState<Page>('home');
    const location = useLocation();
    const isShop = useMemo(
        () => location.pathname.split('/').includes('shop'),
        [location]
    );

    useEffect(() => {
        if (isShop) setCurrPage('shop');
        else setCurrPage('home');
    }, [isShop]);

    return (
        <div className={styles.navbar}>
            <Link
                className={`${styles.navbar__item} ${
                    currPage === 'home' ? styles.current : ''
                }`}
                to={HOME_ROUTE}>
                Home
            </Link>
            <Link
                className={`${styles.navbar__item} ${
                    currPage === 'shop' ? styles.current : ''
                }`}
                to={SHOP_ROUTE}>
                Shop
            </Link>
            <li className={styles.navbar__item}>Plant Care</li>
        </div>
    );
};

export default Navbar;
