import { Outlet } from 'react-router-dom';
import Path from '../components/Path/Path';

const RootShop = () => {
    return (
        <>
            <Path />
            <Outlet />
        </>
    );
};

export default RootShop;
