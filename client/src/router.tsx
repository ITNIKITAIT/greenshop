import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import {
    CHECKOUT_ROUTE,
    HOME_ROUTE,
    PRODUCT_ROUTE,
    SHOPPING_CART_ROUTE,
    SHOP_ROUTE,
} from './utils/consts';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import { productApi } from './api/productApi';
import { store } from './store/store';
import Root from './pages/Root';
import RootShop from './pages/RootShop';
import fetchCart from './modules/fetchCart';

export const router = createBrowserRouter([
    {
        path: HOME_ROUTE,
        element: <Root />,
        errorElement: <NotFoundPage />,
        loader: async () => store.dispatch(fetchCart()),
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: SHOP_ROUTE,
                element: <RootShop />,
                loader: async () => {
                    store.dispatch(
                        productApi.util.prefetch('getSortedProducts', {}, {})
                    );
                    return null;
                },
                children: [
                    {
                        index: true,
                        element: <ShopPage />,
                    },
                    {
                        path: SHOPPING_CART_ROUTE,
                        element: <ShoppingCartPage />,
                    },
                    {
                        path: PRODUCT_ROUTE,
                        element: <ProductPage />,
                    },
                    {
                        path: CHECKOUT_ROUTE,
                        element: <CheckoutPage />,
                    },
                ],
            },
        ],
    },
]);
