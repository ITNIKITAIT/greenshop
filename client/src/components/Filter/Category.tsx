import useFilters from '../../hooks/useFilters';
import styles from './filter.module.scss';

export interface ICategory {
    name: string;
    _count: {
        products: number;
    };
}

const Category = ({ name, _count }: ICategory) => {
    const { category, setSearchParams } = useFilters();

    const changeCategory = () => {
        setSearchParams((params) => {
            params.set('category', name);
            if (params.get('type') === 'all' || !params.get('type')) {
                params.set('type', 'new');
            }
            params.delete('page');
            return params;
        });
    };

    if (_count.products === 0) return <></>;

    return (
        <li
            onClick={changeCategory}
            className={category === name ? styles.categorySelect : ''}>
            {name}
            <span>({_count.products})</span>
        </li>
    );
};

export default Category;
