import { productApi } from '../../api/productApi';
import Skeleton from '../Skeleton/Skeleton';
import Category from './Category';
import Price from './Price';
import styles from './filter.module.scss';

const Filter = () => {
    const { data: categories, isLoading } = productApi.useGetCategoriesQuery();

    return (
        <div className={styles.filter}>
            <h3>Categories</h3>

            {isLoading ? (
                <Skeleton />
            ) : (
                <ul className={styles.category__list}>
                    {categories?.map((category, i) => (
                        <Category key={i} {...category}></Category>
                    ))}
                </ul>
            )}

            <Price />
        </div>
    );
};

export default Filter;
