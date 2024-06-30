import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Path from '../components/Path/Path';
import Shop from '../components/Shop/Shop';

const ShopPage = () => {
    return (
        <>
            <Header />
            <Path />
            <Shop />
            <Footer />
            <Outlet />
        </>
    );
};

export default ShopPage;
