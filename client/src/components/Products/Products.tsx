import ProductCard from './ProductCard';
import Sort from '../Sort/Sort';
import styles from './products.module.scss';
import { productApi } from '../../api/productApi';
import { useSearchParams } from 'react-router-dom';
import { getSearchParams } from '../../utils/getSearchParams';
import Pagination from './Pagination';

export interface IProduct {
    id: number;
    name: string;
    shortDesc: string;
    fullDesc: string;
    imageUrl: string;
    sale: number | null;
    price: number;
    rating: number;
    categoryId: number;
    createdAt: Date;
}

const Products = () => {
    const [searchParams] = useSearchParams();

    const { data, isLoading } = productApi.useGetSortedProductsQuery(
        getSearchParams(searchParams)
    );

    if (data?.products.length === 0) {
        return <div className={styles.NotFound}>No products found</div>;
    }

    return (
        <div className={styles.products}>
            <Sort />
            {!isLoading && (
                <>
                    <div className={styles.products__list}>
                        {(data?.products ?? []).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <Pagination pages={data?.pages as number} />
                </>
            )}
        </div>
    );
};

export default Products;
