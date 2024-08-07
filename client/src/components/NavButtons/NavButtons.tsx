import styles from './navButtons.module.scss';
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';
import { TbLogin2 } from 'react-icons/tb';
import { useAppSelector } from '../../store/store';
import { amountProducts } from '../../modules/shoppingCart.slice';
import { useNavigate } from 'react-router-dom';
import { SHOPPING_CART_ROUTE } from '../../utils/consts';
import { useState } from 'react';
import Authorization from '../Authorization/Authorization';

const NavButtons = () => {
    const amount = useAppSelector(amountProducts);
    const navigate = useNavigate();

    const [auth, setAuth] = useState<boolean>(false);

    return (
        <div className={styles.nav__buttons}>
            <FiSearch className={styles.searchIcon} />
            <div
                style={{ position: 'relative' }}
                onClick={() => navigate(SHOPPING_CART_ROUTE)}>
                <IoCartOutline className={styles.cartIcon} />
                <span className={styles.cartCounter}>{amount}</span>
            </div>
            <button
                onClick={() => setAuth(true)}
                className={`green-btn ` + styles.btnLogin}>
                <TbLogin2 className={styles.loginIcon} />
                Login
            </button>
            {auth && <Authorization setAuth={setAuth} />}
        </div>
    );
};

export default NavButtons;
