export const getPrice = (price: number, sale: null | number) => {
    const percent = sale ? 100 - sale : 100;
    return Math.floor((price * percent) / 100);
};
