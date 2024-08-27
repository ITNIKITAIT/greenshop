import Pages from './Pages';
import ProductCard from './ProductCard';
import Sort from './Sort';
import styles from './products.module.scss';
import { productApi } from '../../api/productApi';
import { useSearchParams } from 'react-router-dom';
import { getSearchParams } from '../../utils/getSearchParams';

export interface IProduct {
    id: number;
    name: string;
    description: string | null;
    sale: number | null;
    price: number;
    rating: number;
    categoryId: number;
    createdAt: Date;
}

const Products = () => {
    const [searchParams] = useSearchParams();

    const { data: products, isLoading } = productApi.useGetSortedProductsQuery(
        getSearchParams(searchParams)
    );

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
