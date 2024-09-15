import styles from './product.module.scss';

const ProductMore = ({ fullDesc }: { fullDesc: string }) => {
    return (
        <section className={styles.product__more}>
            <div>
                <h3>Product Description</h3>
            </div>
            <p>{fullDesc}</p>
        </section>
    );
};

export default ProductMore;
