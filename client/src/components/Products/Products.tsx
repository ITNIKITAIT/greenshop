import Pages from './Pages';
import Product from './Product';
import Sort from './Sort';
import styles from './products.module.scss';

const Products = () => {
    return (
        <div>
            <Sort />
            <div className={styles.products__list}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <Pages />
        </div>
    );
};

export default Products;
