import { useState } from 'react';
import styles from './product.module.scss';
import { BsHeart } from 'react-icons/bs';

const ProductButtons = () => {
    const [count, setCount] = useState<number>(1);

    const handleMinus = () => {
        if (count !== 0) setCount(count - 1);
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
                <button className={'white-btn ' + styles.btnAdd}>
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
