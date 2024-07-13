import ProductCard from '../Products/ProductCard';
import { IProduct } from '../Products/Products';
import styles from './reletedProducts.module.scss';
import { productApi } from '../../api/productApi';

const ReletedProducts = () => {
    const { data: reletedProducts, isLoading } =
        productApi.useGetReletedProductsQuery();

    return (
        <div className="container">
            <section className={styles.releted}>
                <h2 className={styles.releted__title}>Releted Products</h2>
                <div className={styles.releted__list}>
                    {!isLoading &&
                        (reletedProducts as IProduct[]).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
            </section>
        </div>
    );
};

export default ReletedProducts;
