import { useState } from 'react';
import styles from './shoppingCart.module.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import {
    ICartItem,
    addOneProduct,
    deleteFullProduct,
    deleteOneProduct,
} from '../../modules/shoppingCart.slice';
import { withDiscount } from '../../utils/discountFunc';
import { useAppDispatch } from '../../store/store';

const CartItem = ({ id, sale, price, name, quantity }: ICartItem) => {
    const [amount, setAmount] = useState<number>(quantity);
    const dispatch = useAppDispatch();

    const handleMinus = () => {
        if (amount !== 1) {
            setAmount(amount - 1);
            dispatch(deleteOneProduct(id));
        }
    };
    const handlePlus = () => {
        setAmount(amount + 1);
        dispatch(addOneProduct(id));
    };

    return (
        <>
            <div className={styles.item}>
                <img src="/img/flowers.png" alt="flower" />
                <section>
                    <h5 className={styles.item__name}>{name}</h5>
                    <p className={styles.item__SKU}>
                        SKU: <span>1995751877966</span>
                    </p>
                </section>
            </div>
            <div className={styles.price}>${withDiscount(price, sale)}.00</div>
            <div>
                <div className={styles.counter}>
                    <button onClick={handleMinus} className="green-btn">
                        -
                    </button>
                    {amount}
                    <button onClick={handlePlus} className="green-btn">
                        +
                    </button>
                </div>
            </div>

            <div className={styles.total}>
                ${withDiscount(price, sale) * amount}.00
            </div>
            <div>
                <AiOutlineDelete
                    onClick={() => dispatch(deleteFullProduct(id))}
                    className={styles.bin}
                />
            </div>
        </>
    );
};

export default CartItem;
