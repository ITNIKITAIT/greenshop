import { useEffect, useState } from 'react';
import ProductCard from '../Products/ProductCard';
import { IProduct } from '../Products/Products';
import styles from './reletedProducts.module.scss';

const ReletedProducts = () => {
    const [reletedProducts, setReletedProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('http://localhost:3200/products')
            .then((data) => data.json())
            .then((res) => {
                setReletedProducts(res);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="container">
            <section className={styles.releted}>
                <h2 className={styles.releted__title}>Releted Products</h2>
                <div className={styles.releted__list}>
                    {reletedProducts
                        .filter((product) => product.id <= 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                </div>
            </section>
        </div>
    );
};

export default ReletedProducts;
