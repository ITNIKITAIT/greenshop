import { Link } from 'react-router-dom';
import styles from './shoppingCart.module.scss';
import { SHOP_ROUTE } from '../../utils/consts';

const CartTotal = () => {
    return (
        <div className={styles.cart__total}>
            <h2>Cart Totals</h2>
            <ul>
                <li>
                    Subtotal<span>$2,683.00</span>
                </li>
                <li>
                    Shiping<span>$16.00</span>
                </li>
            </ul>
            <div>
                Total<span>$2,699.00</span>
            </div>
            <button className={'green-btn ' + styles.checkoutBtn}>
                Proceed To Checkout
            </button>
            <Link className={styles.backtoshop} to={SHOP_ROUTE}>
                Continue Shopping
            </Link>
        </div>
    );
};

export default CartTotal;
