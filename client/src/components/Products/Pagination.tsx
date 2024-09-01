import styles from './products.module.scss';
import { RiArrowRightSLine } from 'react-icons/ri';
import useFilters from '../../hooks/useFilters';

type Props = { pages: number };

const Pagination = ({ pages }: Props) => {
    const { setSearchParams, currPage } = useFilters();

    const goToPage = (index: number) => {
        setSearchParams((params) => {
            params.set('page', index.toString());
            return params;
        });
    };

    return (
        <div className={styles.pages__list}>
            {[...Array(pages)].map((_, index) => (
                <div
                    onClick={() => goToPage(index + 1)}
                    key={index}
                    className={
                        currPage === index + 1 ? `${styles.page__active}` : ''
                    }>
                    {index + 1}
                </div>
            ))}

            <div
                style={
                    currPage === pages
                        ? { opacity: '0.4', pointerEvents: 'none' }
                        : {}
                }
                onClick={() => goToPage(currPage + 1)}>
                <RiArrowRightSLine />
            </div>
        </div>
    );
};

export default Pagination;
