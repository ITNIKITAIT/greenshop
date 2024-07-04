import { allProducts } from '../../modules/shoppingCart.slice';
import { useAppSelector } from '../../store/store';
import styles from './checkout.module.scss';
import CheckoutItem from './CheckoutItem';

interface Props {
    qty?: string;
}

const CheckoutList = ({ qty }: Props) => {
    const products = useAppSelector(allProducts);

    return (
        <div className={styles.table}>
            <span className={styles.subtitle}>Products</span>
            <span className={styles.subtitle}>{qty}</span>
            <span className={styles.subtitle}>Subtotal</span>

            {products.map((product, i) => (
                <CheckoutItem key={i} {...product} />
            ))}
        </div>
    );
};

export default CheckoutList;
