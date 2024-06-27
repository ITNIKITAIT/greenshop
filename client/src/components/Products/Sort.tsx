import styles from './products.module.scss';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Sort = () => {
    return (
        <section className={styles.sort}>
            <ul className={styles.sort__list}>
                <li className={styles.sort__item}>All Plants</li>
                <li className={styles.sort__item}>New Arrivals</li>
                <li className={styles.sort__item}>Sale</li>
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
