import styles from './products.module.scss';

const Product = () => {
    return (
        <div className={styles.product}>
            <div className={styles.img__wrapper}>
                <img src="./img/flowers.png" alt="" />
            </div>
            <h4 className={styles.product__name}>Beach Spider Lily</h4>
            <p className={styles.product__price}>$129.00</p>
        </div>
    );
};

export default Product;
