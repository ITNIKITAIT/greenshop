import styles from './products.module.scss';
import Discount from '../Discount/Discount';
import { IProduct } from './Products';
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';
import Heart from '@react-sandbox/heart';
import { useNavigate } from 'react-router-dom';
import { getProductRoute } from '../../utils/consts';
import { withDiscount } from '../../utils/discountFunc';
import { MouseEvent, useEffect } from 'react';
import { useAppSelector } from '../../store/store';
import { useAddButtons } from '../../hooks/useAddButtons';
import { selectItemById } from '../../modules/wishList.slice';
import useFavourites from '../../hooks/useFavourites';

interface Props {
    product: IProduct;
}

const ProductCard = ({ product }: Props) => {
    const { id, name, price, sale } = product;

    const navigate = useNavigate();
    const isFavourite = useAppSelector((state) => selectItemById(state, id));

    const { addCartItem } = useAddButtons();
    const { addToWishlist, removeFromWishlist } = useFavourites();

    const addToCart = async (e: MouseEvent) => {
        e.stopPropagation();
        addCartItem({ ...product, quantity: 1 });
    };

    const toggleFavourites = (e: MouseEvent) => {
        e.stopPropagation();
        if (isFavourite) {
            removeFromWishlist(product);
        } else {
            addToWishlist(product);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.product}>
            <div
                className={styles.img__wrapper}
                onClick={() => navigate(getProductRoute(id))}>
                <img src="/img/flowers.png" alt="" />
                <div className={styles.product__buttons}>
                    <div onClick={addToCart}>
                        <IoCartOutline className={styles.product__icons} />
                    </div>
                    <div onClick={toggleFavourites}>
                        <Heart
                            strokeWidth={40}
                            inactiveColor={'#222222'}
                            activeColor={'#46a358'}
                            width={26}
                            height={26}
                            active={isFavourite}
                            onClick={() => {}}
                        />
                    </div>
                    <div>
                        <FiSearch />
                    </div>
                </div>
            </div>
            <h4 className={styles.product__name}>{name}</h4>

            {sale ? (
                <>
                    <p className={styles.product__price}>
                        ${withDiscount(price, sale)}.00
                    </p>
                    <p className={styles.product__standartPrice}>${price}.00</p>
                    <Discount sale={sale} />
                </>
            ) : (
                <p className={styles.product__price}>${price}.00</p>
            )}
        </div>
    );
};

export default ProductCard;
