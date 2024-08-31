import { amountProducts, fullPrice } from '../../modules/shoppingCart.slice';
import { useAppSelector } from '../../store/store';
import styles from './totalPrice.module.scss';

const TotalPrice = () => {
    const price = useAppSelector(fullPrice);
    const amount = useAppSelector(amountProducts);
    const shipingPrice = amount * 3;
    return (
        <div className={styles.totalPrice}>
            <ul>
                <li>
                    Subtotal<span>${price.toFixed(2)}</span>
                </li>
                <li>
                    Shiping<span>${shipingPrice.toFixed(2)}</span>
                </li>
            </ul>
            <div>
                Total<span>${(price + shipingPrice).toFixed(2)}</span>
            </div>
        </div>
    );
};

export default TotalPrice;
