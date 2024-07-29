import Pages from './Pages';
import ProductCard from './ProductCard';
import Sort, { SortType } from './Sort';
import styles from './products.module.scss';
import { productApi } from '../../api/productApi';
import { useSearchParams } from 'react-router-dom';

export interface IProduct {
    id: number;
    name: string;
    price: number;
    sale: null | number;
}

export type FilterType = {
    type?: SortType;
    from?: number | null;
    to?: number | null;
};

const Products = () => {
    const [searchParams] = useSearchParams();
    const params = {
        type: searchParams.get('sort'),
        from: searchParams.get('from'),
        to: searchParams.get('to'),
    } as FilterType;
    const { data: products, isLoading } =
        productApi.useGetSortedProductsQuery(params);

    return (
        <div className={styles.products}>
            <Sort />
            {!isLoading && (
                <>
                    <div className={styles.products__list}>
                        {(products ?? []).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <Pages products={products ?? []} />
                </>
            )}
        </div>
    );
};

export default Products;
