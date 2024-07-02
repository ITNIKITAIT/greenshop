import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import {
    HOME_ROUTE,
    PRODUCT_ROUTE,
    SHOPPING_CART_ROUTE,
    SHOP_ROUTE,
} from './utils/consts';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

export const router = createBrowserRouter([
    {
        path: HOME_ROUTE,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: SHOP_ROUTE,
        element: <ShopPage />,
    },
    {
        path: PRODUCT_ROUTE,
        element: <ProductPage />,
    },
    {
        path: SHOPPING_CART_ROUTE,
        element: <ShoppingCartPage />,
    },
]);
