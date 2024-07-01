import styles from './product.module.scss';

const ProductImages = () => {
    return (
        <div className={styles.product__imgs}>
            <ul className={styles.list}>
                <li>
                    <img src="/img/flowers.png" alt="flowers" />
                </li>
                <li>
                    <img src="/img/flowers.png" alt="flowers" />
                </li>
                <li>
                    <img src="/img/flowers.png" alt="flowers" />
                </li>
                <li>
                    <img src="/img/flowers.png" alt="flowers" />
                </li>
            </ul>
            <div className={styles.product__mainImg}>
                <img src="/img/flowers.png" alt="flowers" />
            </div>
        </div>
    );
};

export default ProductImages;
