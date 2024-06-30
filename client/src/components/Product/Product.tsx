import styles from './product.module.scss';

const Product = () => {
    return (
        <div className="container">
            <div className={styles.product__wrapper}>
                <div className={styles.product__imgs}></div>
                <div className={styles.product__description}>
                    <h2>Barberton Daisy</h2>
                    <div className={styles.product__review}>
                        <h3 className={styles.product__price}>$119.00</h3>19
                        Customer Review
                    </div>
                    <div className={styles.product__section}>
                        <h5>Short Description:</h5>
                        <p>
                            The ceramic cylinder planters come with a wooden
                            stand to help elevate your plants off the ground.
                            The ceramic cylinder planters come with a wooden
                            stand to help elevate your plants off the ground.{' '}
                        </p>
                    </div>
                    <div className={styles.product__section}>
                        <h5>Size:</h5>
                        <ul className={styles.size__list}>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                    </div>
                    <div></div>
                    <div className={styles.product__info}></div>
                    <div>
                        <span>Share this products:</span>
                        <ul></ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
