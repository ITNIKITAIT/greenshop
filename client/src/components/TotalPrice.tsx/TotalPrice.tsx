import { amountProducts, fullPrice } from '../../modules/shoppingCart.slice';
import { useAppSelector } from '../../store/store';
import styles from './totalPrice.module.scss';

const TotalPrice = () => {
    const price = useAppSelector(fullPrice);
    const amount = useAppSelector(amountProducts);
    const shippingPrice = amount * 3;
    return (
        <div className={styles.totalPrice}>
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
        </div>
    );
};

export default TotalPrice;
