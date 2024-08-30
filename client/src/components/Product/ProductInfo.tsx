import { IProduct } from '../Products/Products';
import styles from './product.module.scss';
import { FaStar } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import ProductButtons from './ProductButtons';

const ProductInfo = (product: IProduct) => {
    const { name, price, sale, rating } = product;
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
                <div>
                    <div className={styles.stars}>
                        {[...Array(5)].map((_, i) =>
                            rating >= i + 1 ? (
                                <FaStar key={i} className={styles.starIcon} />
                            ) : (
                                <FaStar
                                    key={i}
                                    className={styles.unColoredIcon}
                                />
                            )
                        )}
                    </div>
                    {rating} Customer Review
                </div>
            </div>
            <div className={styles.product__section}>
                <h5>Short Description:</h5>
                <p>
                    The ceramic cylinder planters come with a wooden stand to
                    help elevate your plants off the ground. The ceramic
                    cylinder planters come with a wooden stand to help elevate
                    your plants off the ground.{' '}
                </p>
            </div>
            <ProductButtons {...product} />
            <div className={styles.product__info}>
                <p>
                    SKU: <span>1995751877966</span>
                </p>
                <p>
                    Categories: <span>Potter Plants</span>
                </p>
                <p>
                    Tags: <span>Home, Garden, Plants</span>
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
