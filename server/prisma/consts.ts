export const categories = [
    { name: 'House Plants' },
    { name: 'Potter Plants' },
    { name: 'Seeds' },
    { name: 'Succulents' },
    { name: 'Trerrariums' },
    { name: 'Gardening' },
    { name: 'Accessories' },
    { name: 'Small' },
    { name: 'Medium' },
    { name: 'Large' },
];

export const products = [
    { name: 'Barberton Daisy', price: 119, categoryId: 1 },
    { name: 'Angel Wing Begonia', price: 169, categoryId: 1 },
    { name: 'African Violet', price: 229, categoryId: 1, sale: 13 },
    { name: 'Beach Spider Lily', price: 129, categoryId: 1 },
    { name: 'Blushing Bromeliad', price: 139, categoryId: 1 },
    { name: 'Aluminum Plant', price: 179, categoryId: 1 },
    { name: 'Broadleaf Lady Palm', price: 59, categoryId: 1 },
    { name: 'Chinese Evergreen', price: 39, categoryId: 1 },
    { name: "Bird's Nest Fern", price: 99, categoryId: 1 },
];

export const carts = [
    {
        userId: 1,
        token: '111111',
    },
    { userId: 2, token: '222222' },
];

export const cartItems = [
    {
        productId: 1,
        cartId: 1,
        quantity: 1,
    },
    {
        productId: 2,
        cartId: 1,
        quantity: 5,
    },
    {
        productId: 2,
        cartId: 2,
        quantity: 3,
    },
];
