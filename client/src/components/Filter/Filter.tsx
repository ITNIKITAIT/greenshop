import Category from './Category';
import Price from './Price';
import styles from './filter.module.scss';

const Filter = () => {
    return (
        <div className={styles.filter}>
            <h3>Categories</h3>
            <ul className={styles.category__list}>
                <Category />
                <Category />
                <Category />
                <Category />
            </ul>

            <Price />

            <h3>Size</h3>
            <ul className={styles.category__list}>
                <Category />
                <Category />
            </ul>
        </div>
    );
};

export default Filter;
