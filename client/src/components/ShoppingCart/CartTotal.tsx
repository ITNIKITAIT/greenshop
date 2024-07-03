import { Link } from 'react-router-dom';
import styles from './shoppingCart.module.scss';
import { SHOP_ROUTE } from '../../utils/consts';
import { useAppSelector } from '../../store/store';
import { amountProducts, fullPrice } from '../../modules/shoppingCart.slice';

const CartTotal = () => {
    const price = useAppSelector(fullPrice);
    const amount = useAppSelector(amountProducts);
    const shippingPrice = amount * 3;

    return (
        <div className={styles.cart__total}>
            <h2>Cart Totals</h2>
            <ul>
                <li>
                    Subtotal<span>${price}.00</span>
                </li>
                <li>
                    Shiping<span>${shippingPrice}.00</span>
                </li>
            </ul>
            <div>
                Total<span>${price + shippingPrice}.00</span>
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
