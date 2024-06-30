import { useEffect, useState } from 'react';
import Pages from './Pages';
import ProductCard from './ProductCard';
import Sort from './Sort';
import styles from './products.module.scss';

export interface IProduct {
    id: number;
    name: string;
    price: number;
    sale: null | number;
}

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('http://localhost:3200/products')
            .then((data) => data.json())
            .then((res) => {
                setProducts(res);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Sort />
            <div className={styles.products__list}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Pages products={products} />
        </div>
    );
};

export default Products;
