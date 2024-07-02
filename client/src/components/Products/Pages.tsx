import { useState } from 'react';
import { IProduct } from './Products';
import styles from './products.module.scss';
import { RiArrowRightSLine } from 'react-icons/ri';

type Props = { products: IProduct[] };

const Pages = ({ products }: Props) => {
    const [page, setPage] = useState<number>(0);

    return (
        <div className={styles.pages__list}>
            {[...Array(Math.ceil(products.length / 2))].map((_, index) => (
                <div
                    onClick={() => setPage(index)}
                    key={index}
                    className={page === index ? `${styles.page__active}` : ''}>
                    {index + 1}
                </div>
            ))}

            <div onClick={() => setPage(page + 1)}>
                <RiArrowRightSLine />
            </div>
        </div>
    );
};

export default Pages;
