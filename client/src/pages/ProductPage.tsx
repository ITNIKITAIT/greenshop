import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Path from '../components/Path/Path';
import { IProduct } from '../components/Products/Products';
import { useEffect, useState } from 'react';
import Product from '../components/Product/Product';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, useProduct] = useState<IProduct>({} as IProduct);

    const filterById = (products: IProduct[]): IProduct => {
        return products.filter(({ id }) => `${id}` === productId)[0];
    };

    const Func = (data: IProduct[]) => useProduct(filterById(data));

    useEffect(() => {
        fetch('http://localhost:3200/products')
            .then((data) => data.json())
            .then((res) => Func(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Header />
            <Path />
            <Product />
            <Footer />
        </>
    );
};

export default ProductPage;
