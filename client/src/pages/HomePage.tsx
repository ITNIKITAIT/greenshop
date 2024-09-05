import Shop from '../components/Shop/Shop';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import { skipToken } from '@reduxjs/toolkit/query';
import { orderApi } from '../api/orderApi';
import { useSearchParams } from 'react-router-dom';
import OrderModal from '../components/Modal/OrderModal';
import { BASE_URL } from '../utils/consts';

const HomePage = () => {
    const [seractParams] = useSearchParams();

    const { data: order } = orderApi.useGetOrderQuery(
        seractParams.get('paid') || skipToken
    );

    const closeOrderModal = () => {
        window.location.href = BASE_URL;
    };

    return (
        <>
            <Hero />
            <Shop />
            <Footer />
            {order && <OrderModal close={closeOrderModal} order={order} />}
        </>
    );
};

export default HomePage;
