import { ICartItem } from '../../modules/shoppingCart.slice';
import { withDiscount } from '../../utils/discountFunc';
import styles from './checkout.module.scss';

const CheckoutItem = ({ sale, price, name, quantity }: ICartItem) => {
    return (
        <>
            <div className={styles.desc}>
                <img src="/img/flowers.png" alt="flower" />
                <section>
                    <h5 className={styles.name}>{name}</h5>
                    <p className={styles.SKU}>
                        SKU: <span>1995751877966</span>
                    </p>
                </section>
            </div>
            <div className={styles.quantity}>(x {quantity})</div>
            <div className={styles.total}>
                ${withDiscount(price, sale) * quantity}.00
            </div>
        </>
    );
};

export default CheckoutItem;
