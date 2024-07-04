import { allProducts } from '../../modules/shoppingCart.slice';
import { useAppSelector } from '../../store/store';
import TotalPrice from '../TotalPrice.tsx/TotalPrice';
import styles from './checkout.module.scss';
import CheckoutItem from './CheckoutItem';

const CheckoutInfo = () => {
    const products = useAppSelector(allProducts);

    return (
        <div className={styles.info}>
            <h2 className={styles.title}>Your Order</h2>
            <p className={styles.subtitle}>
                <span>Products</span>
                <span>Subtotal</span>
            </p>
            <ul>
                {products.map((product, i) => (
                    <li className={styles.list__item}>
                        <CheckoutItem {...product} />
                    </li>
                ))}
            </ul>
            <div className={styles.price__wrapper}>
                <TotalPrice />
                <button
                    type="submit"
                    form="main-form"
                    className={'green-btn ' + styles.orderBtn}>
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutInfo;
