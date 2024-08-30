import ProductCard from '../Products/ProductCard';
import { IProduct } from '../Products/Products';
import styles from './reletedProducts.module.scss';
import { productApi } from '../../api/productApi';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';

const ReletedProducts = () => {
    const { productId } = useParams();
    const { data: reletedProducts, isLoading } =
        productApi.useGetReletedProductsQuery(productId ?? skipToken);

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
