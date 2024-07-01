import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './product.module.scss';
import { IProduct } from '../Products/Products';
import ProductInfo from './ProductInfo';
import ProductImages from './ProductImages';
import ProductMore from './ProductMore';
import ReletedProducts from '../ReletedProducts/ReletedProducts';

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<IProduct>({} as IProduct);

    const filterById = (products: IProduct[]): IProduct => {
        return products.filter(({ id }) => `${id}` === productId)[0];
    };

    useEffect(() => {
        fetch('http://localhost:3200/products')
            .then((data) => data.json())
            .then((res) => setProduct(filterById(res)))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className={styles.product__wrapper}>
                <ProductImages />
                <ProductInfo {...product} />
            </div>
            <ProductMore />
            <ReletedProducts />
        </div>
    );
};

export default Product;
