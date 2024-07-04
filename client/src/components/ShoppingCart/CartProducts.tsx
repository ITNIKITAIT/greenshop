import { allProducts } from '../../modules/shoppingCart.slice';
import { useAppSelector } from '../../store/store';
import CartItem from './CartItem';
import styles from './shoppingCart.module.scss';

const CartProducts = () => {
    const productsCart = useAppSelector(allProducts);

    return (
        <div className={styles.table}>
            <h3 className={styles.title}>Products</h3>
            <h3 className={styles.title}>Price</h3>
            <h3 className={styles.title}>Quantity</h3>
            <h3 className={styles.title}>Total</h3>
            <h3 className={styles.title}>{}</h3>

            {productsCart.map((product, i) => (
                <CartItem key={i} {...product} />
            ))}
        </div>
    );
};

export default CartProducts;
