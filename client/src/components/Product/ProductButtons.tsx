import { useEffect, useState } from 'react';
import styles from './product.module.scss';
import { BsHeart } from 'react-icons/bs';
import { IProduct } from '../Products/Products';
import { cartApi } from '../../api/cartApi';
import toast from 'react-hot-toast';

const ProductButtons = (product: IProduct) => {
    const [count, setCount] = useState<number>(1);

    const [addCartItem, result] = cartApi.useAddCartItemMutation();

    const handleAddItem = () => {
        addCartItem({ ...product, quantity: count });
    };

    const handleMinus = () => {
        if (count !== 1) setCount(count - 1);
    };
    const handlePlus = () => setCount(count + 1);

    useEffect(() => {
        if (result.isError) toast.error('Failed to add to cart');
        if (result.isSuccess) toast.success('Added to cart');
    }, [result]);

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
                    onClick={handleAddItem}>
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
