import Category from './Category';
import Price from './Price';
import styles from './filter.module.scss';

const categories = [
    { title: 'House Plants', amount: 33 },
    { title: 'Potter Plants', amount: 12 },
    { title: 'Seeds', amount: 65 },
    { title: 'Succulents', amount: 17 },
    { title: 'Trerrariums', amount: 19 },
    { title: 'Gardening', amount: 13 },
    { title: 'Accessories', amount: 18 },
];

const size = [
    { title: 'Small', amount: 119 },
    { title: 'Medium', amount: 86 },
    { title: 'Large', amount: 78 },
];

const Filter = () => {
    return (
        <div className={styles.filter}>
            <h3>Categories</h3>
            <ul className={styles.category__list}>
                {categories.map((category, i) => (
                    <Category key={i} {...category}></Category>
                ))}
            </ul>

            <Price />

            <h3>Size</h3>
            <ul className={styles.category__list}>
                {size.map((category, i) => (
                    <Category key={i} {...category}></Category>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
