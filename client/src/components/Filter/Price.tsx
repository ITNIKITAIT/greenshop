import styles from './filter.module.scss';

const Price = () => {
    return (
        <>
            <h3>Price range</h3>
            <div className={styles.price}>
                <div className={styles.price__bar}></div>
                <p>
                    Price: <span>$39 - $1230</span>
                </p>
            </div>
            <button className={'green-btn ' + styles.filterBtn}>Filter</button>
        </>
    );
};

export default Price;
