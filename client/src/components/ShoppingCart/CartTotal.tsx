import { Link, useNavigate } from 'react-router-dom';
import styles from './shoppingCart.module.scss';
import { CHECKOUT_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import TotalPrice from '../TotalPrice.tsx/TotalPrice';

const CartTotal = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.cart__total}>
            <h2>Cart Totals</h2>
            <TotalPrice />
            <button
                className={'green-btn ' + styles.checkoutBtn}
                onClick={() => navigate(CHECKOUT_ROUTE)}>
                Proceed To Checkout
            </button>
            <Link className={styles.backtoshop} to={SHOP_ROUTE}>
                Continue Shopping
            </Link>
        </div>
    );
};

export default CartTotal;
