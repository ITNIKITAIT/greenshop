import { useState } from 'react';
import styles from './product.module.scss';
import { IProduct } from '../Products/Products';
import { useAddButtons } from '../../hooks/useAddButtons';
import { useAppSelector } from '../../store/store';
import useFavourites from '../../hooks/useFavourites';
import { selectItemById } from '../../modules/wishList.slice';
import Heart from '@react-sandbox/heart';

const ProductButtons = (product: IProduct) => {
    const [count, setCount] = useState<number>(1);
    const isFavourite = useAppSelector((state) =>
        selectItemById(state, product.id)
    );

    const { addCartItem } = useAddButtons();
    const { removeFromWishlist, addToWishlist } = useFavourites();

    const toggleFavourites = () => {
        if (isFavourite) {
            removeFromWishlist(product);
        } else {
            addToWishlist(product);
        }
    };

    const handleAddItem = () => {
        addCartItem({ ...product, quantity: count });
    };

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
                <button
                    className={'white-btn ' + styles.btnAdd}
                    onClick={handleAddItem}>
                    ADD TO CART
                </button>
                <button
                    onClick={toggleFavourites}
                    className={'white-btn ' + styles.btnFavorite}>
                    <Heart
                        strokeWidth={40}
                        inactiveColor={'#46a358'}
                        activeColor={'#46a358'}
                        width={26}
                        height={26}
                        active={isFavourite}
                        onClick={() => {}}
                    />
                </button>
            </div>
        </div>
    );
};

export default ProductButtons;
