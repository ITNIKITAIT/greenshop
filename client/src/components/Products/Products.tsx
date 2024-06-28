import { useEffect, useState } from 'react';
import Pages from './Pages';
import Product from './Product';
import Sort from './Sort';
import styles from './products.module.scss';

export interface IProduct {
    id: number;
    name: string;
    price: number;
    sale: null | number;
}

const Products = () => {
    const [products, useProducts] = useState<IProduct[]>([]);

    const Func = (data: IProduct[]) => useProducts(data);

    useEffect(() => {
        fetch('http://localhost:3200/products')
            .then((data) => data.json())
            .then((res) => {
                Func(res);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            <Sort />
            <div className={styles.products__list}>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <Pages products={products} />
        </div>
    );
};

export default Products;
