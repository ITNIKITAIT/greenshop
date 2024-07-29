import { useState } from 'react';
import styles from './products.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

export type SortType = 'all' | 'new' | 'sale';

const Sort = () => {
    const [sortType, setSortType] = useState<SortType>('all');
    const [searchParams, setSearchParams] = useSearchParams();

    const sortOptions: { type: SortType; content: string }[] = [
        { type: 'all', content: 'All Plants' },
        { type: 'new', content: 'New Arrivals' },
        { type: 'sale', content: 'Sale' },
    ];

    const handleType = (type: SortType) => {
        setSearchParams((params) => {
            params.set('sort', type);
            return params;
        });
        setSortType(type);
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
            <div>
                Short by:{' '}
                <span>
                    Default sorting{' '}
                    <MdKeyboardArrowDown style={{ height: 'fit-content' }} />
                </span>
            </div>
        </section>
    );
};

export default Sort;
