import Filter from '../Filter/Filter';
import styles from './shop.module.scss';

const Shop = () => {
    return (
        <div className="container">
            <div className={styles.shop}>
                <Filter />
            </div>
        </div>
    );
};

export default Shop;
