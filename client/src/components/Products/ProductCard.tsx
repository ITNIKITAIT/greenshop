import styles from './products.module.scss';
import Discount from '../Discount/Discount';
import { IProduct } from './Products';
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getProductRoute } from '../../utils/consts';
import { useAppDispatch } from '../../store/store';
import { addProduct } from '../../modules/shoppingCart.slice';
import { withDiscount } from '../../utils/discountFunc';

interface Props {
    product: IProduct;
}

const ProductCard = ({ product }: Props) => {
    const { id, name, price, sale } = product;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <div className={styles.product}>
            <div
                className={styles.img__wrapper}
                onClick={() => navigate(getProductRoute(id))}>
                <img src="/img/flowers.png" alt="" />
                <div className={styles.product__buttons}>
                    <div
                        onClick={() =>
                            dispatch(addProduct({ ...product, quantity: 1 }))
                        }>
                        <IoCartOutline className={styles.product__icons} />
                    </div>
                    <div>
                        <BsHeart />
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
