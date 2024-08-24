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
import { getProductRoute } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';
import { cartApi } from '../../api/cartApi';

const CartItem = ({ id, sale, price, name, quantity }: ICartItem) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [updateCart] = cartApi.useUpdateCartMutation();

    const handleMinus = () => {
        if (quantity !== 1) {
            dispatch(deleteOneProduct(id));
            updateCart({ id, quantity: quantity - 1 });
        }
    };
    const handlePlus = () => {
        dispatch(addOneProduct(id));
        updateCart({ id, quantity: quantity + 1 });
    };

    return (
        <>
            <div
                className={styles.item}
                onClick={() => navigate(getProductRoute(id))}>
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
                    {quantity}
                    <button onClick={handlePlus} className="green-btn">
                        +
                    </button>
                </div>
            </div>

            <div className={styles.total}>
                ${withDiscount(price, sale) * quantity}.00
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
