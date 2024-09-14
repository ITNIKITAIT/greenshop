import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useAppDispatch } from '../store/store';
import { cartApi } from '../api/cartApi';
import { useEffect } from 'react';
import { fetchCart } from '../modules/fetching';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    const dispatch = useAppDispatch();
    const { data: cart } = cartApi.useGetCartQuery();
    useEffect(() => {
        if (cart) {
            dispatch(fetchCart());
        }
    }, [cart, dispatch]);

    return (
        <>
            <Header />
            <Outlet />

            <Toaster />
        </>
    );
};

export default Root;
