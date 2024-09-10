import { useState } from 'react';
import styles from './product.module.scss';
import { BsHeart } from 'react-icons/bs';
import { IProduct } from '../Products/Products';
import toast from 'react-hot-toast';
import { useAddButtons } from '../../hooks/useAddButtons';
import { selectUserId } from '../../modules/auth.slice';
import { useAppSelector } from '../../store/store';

const ProductButtons = (product: IProduct) => {
    const [count, setCount] = useState<number>(1);
    const userId = useAppSelector(selectUserId);

    const { addWishItem, addCartItem } = useAddButtons();

    const handleAddItem = () => {
        addCartItem({ ...product, quantity: count });
    };

    const handleMinus = () => {
        if (count !== 1) setCount(count - 1);
    };
    const handlePlus = () => setCount(count + 1);

    const addToWishlist = () => {
        if (!userId) {
            toast.error(
                'You must first register to add a product to your wishlist.'
            );
        } else {
            addWishItem({ productId: product.id, userId });
        }
    };

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
                    <BsHeart onClick={addToWishlist} />
                </button>
            </div>
        </div>
    );
};

export default ProductButtons;
