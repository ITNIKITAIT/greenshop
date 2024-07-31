const HOME_ROUTE: string = '/';
const SHOP_ROUTE: string = '/shop';
const PRODUCT_ROUTE: string = SHOP_ROUTE + '/product/:productId';
const SHOPPING_CART_ROUTE: string = SHOP_ROUTE + '/shoppingCart';
const CHECKOUT_ROUTE: string = SHOP_ROUTE + '/checkout';

export const API_URL = 'https://greenshop-api.onrender.com/api';

export {
    HOME_ROUTE,
    SHOP_ROUTE,
    SHOPPING_CART_ROUTE,
    CHECKOUT_ROUTE,
    PRODUCT_ROUTE,
};

export const getProductRoute = (prodId: number) => `/shop/product/${prodId}`;
