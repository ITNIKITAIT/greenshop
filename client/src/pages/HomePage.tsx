import Shop from '../components/Shop/Shop';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import { skipToken } from '@reduxjs/toolkit/query';
import { orderApi } from '../api/orderApi';
import { useSearchParams } from 'react-router-dom';
import OrderModal from '../components/Modal/OrderModal';

const HomePage = () => {
    const [seractParams] = useSearchParams();

    const { data: order } = orderApi.useGetOrderQuery(
        seractParams.get('paid') || skipToken
    );

    return (
        <>
            <Hero />
            <Shop />
            <Footer />
            {order && <OrderModal order={order} />}
        </>
    );
};

export default HomePage;
