const HOME_ROUTE: string = '/';
const SHOP_ROUTE: string = '/shop';
const PRODUCT_ROUTE: string = '/shop/product/:productId';
const SHOPPING_CART_ROUTE: string = '/shoppingCart';
const CHECKOUT_ROUTE: string = '/checkout';

export {
    HOME_ROUTE,
    SHOP_ROUTE,
    SHOPPING_CART_ROUTE,
    CHECKOUT_ROUTE,
    PRODUCT_ROUTE,
};

export const getProductRoute = (prodId: number) => `/shop/product/${prodId}`;
