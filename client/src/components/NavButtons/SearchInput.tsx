import { useRef, useState } from 'react';
import styles from './navButtons.module.scss';
import { FiSearch } from 'react-icons/fi';
import { useClickAway } from 'react-use';
import { Link } from 'react-router-dom';
import { getProductRoute } from '../../utils/consts';
import { productApi } from '../../api/productApi';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [focused, setFocused] = useState<Boolean>(false);

    const ref = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useClickAway(ref, () => {
        setFocused(false);
    });

    const onClickItem = () => {
        setFocused(false);
        setSearchQuery('');
    };

    const onClickIcon = () => {
        setFocused(true);
        if (inputRef.current) inputRef.current.focus();
    };

    const { data: products } =
        productApi.useGetProductBySearchQuery(searchQuery);

    return (
        <>
            {focused && <div className={styles.searchBg}></div>}

            <div ref={ref} className={styles.searchWrapper}>
                <input
                    className={`${styles.searchInput} ${
                        focused && styles.searchInputFocus
                    }`}
                    value={searchQuery}
                    ref={inputRef}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                />

                <FiSearch onClick={onClickIcon} className={styles.searchIcon} />

                <div
                    className={`${styles.searchList} ${
                        focused && styles.searchListFocus
                    }`}>
                    {products?.map((product) => (
                        <Link
                            onClick={onClickItem}
                            key={product.id}
                            className={styles.searchLink}
                            to={getProductRoute(product.id)}>
                            <img src="/img/flowers.png" alt="product" />
                            <h3>{product.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SearchInput;
