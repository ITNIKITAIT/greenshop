import Filter from '../Filter/Filter';
import Products from '../Products/Products';
import styles from './shop.module.scss';

const Shop = () => {
    return (
        <div className="container">
            <div className={styles.shop}>
                <Filter />
                <Products />
            </div>
        </div>
    );
};

export default Shop;
