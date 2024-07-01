import { useState } from 'react';
import styles from './product.module.scss';
import { BsHeart } from 'react-icons/bs';
import { IProduct } from '../Products/Products';
import { useAppDispatch } from '../../store/store';
import { addProduct } from '../../modules/shoppingCart.slice';

const ProductButtons = (product: IProduct) => {
    const [count, setCount] = useState<number>(1);
    const dispatch = useAppDispatch();

    const handleMinus = () => {
        if (count !== 1) setCount(count - 1);
    };
    const handlePlus = () => setCount(count + 1);

    return (
        <div className={styles.product__buttons}>
            <div className={styles.product__counter}>
                <button className="green-btn" onClick={handleMinus}>
                    -
                </button>
                {count}
                <button className="green-btn" onClick={handlePlus}>
                    +
                </button>
            </div>
            <div>
                <button className={'green-btn ' + styles.btnBuy}>
                    BUY NOW
                </button>
                <button
                    className={'white-btn ' + styles.btnAdd}
                    onClick={() =>
                        dispatch(addProduct({ ...product, quantity: count }))
                    }>
                    ADD TO CART
                </button>
                <button className={'white-btn ' + styles.btnFavorite}>
                    <BsHeart />
                </button>
            </div>
        </div>
    );
};

export default ProductButtons;
