import styles from './products.module.scss';
import { IProduct } from './Products';
import Sale from '../Sale/Sale';
import { FiSearch } from 'react-icons/fi';
import { IoCartOutline } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';

interface Props {
    product: IProduct;
}

const Product = ({ product }: Props) => {
    const { name, price, sale } = product;

    return (
        <div className={styles.product}>
            <div className={styles.img__wrapper}>
                <img src="./img/flowers.png" alt="" />
                <div className={styles.product__buttons}>
                    <div>
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
                        ${Math.floor(price * ((100 - sale) / 100))}.00
                    </p>
                    <p className={styles.product__standartPrice}>${price}.00</p>
                    <Sale sale={sale} />
                </>
            ) : (
                <p className={styles.product__price}>${price}.00</p>
            )}
        </div>
    );
};

export default Product;
