import { IProduct } from '../components/Products/Products';
import { ICart } from '../modules/shoppingCart.slice';
import { withDiscount } from './discountFunc';

interface CartItemDTO {
    id: number;
    quantity: number;
    product: IProduct;
}

export interface CartDTO {
    id: number;
    userId: number;
    token: string;
    items: CartItemDTO[];
}

export const calcTotalPrice = (item: CartItemDTO): number =>
    withDiscount(item.product.price, item.product.sale) * item.quantity;

export const getCartDetails = (data: CartDTO): ICart => {
    const items = data.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.product.name,
        shortDesc: item.product.shortDesc,
        fullDesc: item.product.fullDesc,
        price: item.product.price,
        rating: item.product.rating,
        sale: item.product.sale,
        imageUrl: item.product.imageUrl,
        categoryId: item.product.categoryId,
        createdAt: item.product.createdAt,
        productId: item.product.id,
    }));
    return {
        items,
    };
};
