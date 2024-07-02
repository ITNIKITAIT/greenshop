import { amountProducts } from '../../modules/shoppingCart.slice';
import { useAppSelector } from '../../store/store';
import CartProducts from './CartProducts';
import CartTotal from './CartTotal';
import styles from './shoppingCart.module.scss';

const ShoppingCart = () => {
    const amount = useAppSelector(amountProducts);

    return (
        <div className="container">
            {amount === 0 ? (
                <div className={styles.cart__empty}>
                    Shopping Cart is empty{'('}
                </div>
            ) : (
                <section className={styles.cart}>
                    <CartProducts />
                    <CartTotal />
                </section>
            )}
        </div>
    );
};

export default ShoppingCart;
