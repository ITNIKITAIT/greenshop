import Pages from './Pages';
import ProductCard from './ProductCard';
import Sort from './Sort';
import styles from './products.module.scss';
import { productApi } from '../../api/productApi';

export interface IProduct {
    id: number;
    name: string;
    price: number;
    sale: null | number;
}

const Products = () => {
    const { data, isLoading } = productApi.useGetAllProductsQuery();

    return (
        <div>
            <Sort />
            <div className={styles.products__list}>
                {!isLoading &&
                    (data ?? []).map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
            {!isLoading && <Pages products={data ?? []} />}
        </div>
    );
};

export default Products;
