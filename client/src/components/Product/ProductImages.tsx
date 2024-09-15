import styles from './product.module.scss';

const ProductImages = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <div className={styles.product__imgs}>
            <div className={styles.product__mainImg}>
                <img src={imageUrl} alt="flower" />
            </div>
        </div>
    );
};

export default ProductImages;
