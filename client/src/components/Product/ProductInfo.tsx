import { IProduct } from '../Products/Products';
import styles from './product.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import ProductButtons from './ProductButtons';
import { productApi } from '../../api/productApi';
import { skipToken } from '@reduxjs/toolkit/query';

const ProductInfo = (product: IProduct) => {
    const { name, price, sale, shortDesc, categoryId } = product;

    const { data: category } = productApi.useGetProductCategoryQuery(
        categoryId ?? skipToken
    );

    return (
        <div className={styles.product__description}>
            <h2>{name}</h2>
            <div className={styles.product__review}>
                <div>
                    {sale ? (
                        <>
                            <p className={styles.product__price}>
                                ${Math.floor(price * ((100 - sale) / 100))}
                                .00
                            </p>
                            <p className={styles.product__standartPrice}>
                                ${price}.00
                            </p>
                        </>
                    ) : (
                        <p className={styles.product__price}>${price}.00</p>
                    )}
                </div>
            </div>
            <div className={styles.product__section}>
                <h5>Short Description:</h5>
                <p>{shortDesc}</p>
            </div>
            <ProductButtons {...product} />
            <div className={styles.product__info}>
                <p>
                    SKU: <span>1995751877966</span>
                </p>
                <p>
                    Categories: <span>{category?.name}</span>
                </p>
            </div>
            <div className={styles.product__share}>
                <span>Share this products:</span>
                <FaFacebookF className={styles.shareIcon} />
                <FaTwitter className={styles.shareIcon} />
                <FaLinkedinIn className={styles.shareIcon} />
            </div>
        </div>
    );
};

export default ProductInfo;
