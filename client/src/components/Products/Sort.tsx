import styles from './products.module.scss';
import useFilters from '../../hooks/useFilters';
import SortBy from '../Sort/SortBy';

export type SortType = 'all' | 'new' | 'sale';

const Sort = () => {
    const { sortType, setSearchParams } = useFilters();

    const sortOptions: { type: SortType; content: string }[] = [
        { type: 'all', content: 'All Plants' },
        { type: 'new', content: 'New Arrivals' },
        { type: 'sale', content: 'Sale' },
    ];

    const handleType = (type: SortType) => {
        setSearchParams((params) => {
            params.set('type', type);
            if (type === 'all') {
                params.delete('category');
            }
            return params;
        });
    };

    return (
        <section className={styles.sort}>
            <ul className={styles.sort__list}>
                {sortOptions.map((option) => (
                    <li
                        key={option.type}
                        className={`${styles.sort__item} ${
                            sortType === option.type ? styles.sort__current : ''
                        }`}
                        onClick={() => handleType(option.type)}>
                        {option.content}
                    </li>
                ))}
            </ul>

            <SortBy />
        </section>
    );
};

export default Sort;
