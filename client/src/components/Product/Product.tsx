import { useParams } from 'react-router-dom';
import styles from './product.module.scss';
import { IProduct } from '../Products/Products';
import ProductInfo from './ProductInfo';
import ProductImages from './ProductImages';
import ProductMore from './ProductMore';
import ReletedProducts from '../ReletedProducts/ReletedProducts';
import { productApi } from '../../api/productApi';
import { skipToken } from '@reduxjs/toolkit/query';

const Product = () => {
    const { productId } = useParams();

    const { data: product } = productApi.useGetProductByIdQuery(
        productId ?? skipToken
    );

    return (
        <div className="container">
            <div className={styles.product__wrapper}>
                <ProductImages />
                <ProductInfo {...(product as IProduct)} />
            </div>
            <ProductMore />
            <ReletedProducts />
        </div>
    );
};

export default Product;
