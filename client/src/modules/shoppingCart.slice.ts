import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../components/Products/Products';
import { withDiscount } from '../utils/discountFunc';
import { fetchCart } from './fetching';

export interface ICart {
    items: ICartItem[];
}

export interface ICartItem extends IProduct {
    quantity: number;
    productId: number;
}

interface shoppingCartState extends ICart {
    loading: boolean;
    error: boolean;
}

const initialState: shoppingCartState = {
    items: [],
    loading: true,
    error: false,
};

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    selectors: {
        allProducts: (state): ICartItem[] => state.items,
        amountProducts: (state): number =>
            state.items.reduce((acc, item) => acc + item.quantity, 0),
        fullPrice: (state): number =>
            state.items.reduce(
                (acc, item) =>
                    acc + withDiscount(item.price, item.sale) * item.quantity,
                0
            ),
        priceWithDelivery: (state): number =>
            state.items.reduce(
                (acc, item) =>
                    acc +
                    withDiscount(item.price, item.sale) * item.quantity +
                    3 * item.quantity,
                0
            ),
    },
    reducers: {
        addProduct: (state, action: PayloadAction<ICartItem>) => {
            // const product = action.payload;
            // const existingProduct = state.items.find(
            //     (item) => item.id === product.id
            // );
            // if (existingProduct) existingProduct.quantity += product.quantity;
            // else state.items.push(product);
        },
        addOneProduct: (state, action: PayloadAction<number>) => {
            // const id = action.payload;
            // const currProduct = state.items.find(
            //     (item) => item.id === id
            // ) as ICartItem;
            // currProduct.quantity += 1;
        },
        deleteFullProduct: (state, action: PayloadAction<number>) => {
            // const id = action.payload;
            // state.items.splice(
            //     state.items.findIndex((item) => item.id === id),
            //     1
            // );
        },
        deleteOneProduct: (state, action: PayloadAction<number>) => {
            // const id = action.payload;
            // const currProduct = state.items.find(
            //     (item) => item.id === id
            // ) as ICartItem;
            // currProduct.quantity -= 1;
        },
        resetProducts: (state, action) => {
            // state.items = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
            })
            .addCase(fetchCart.rejected, (state) => {
                state.loading = false;
                state.error = true;
            });
    },
});

export const {
    addProduct,
    deleteOneProduct,
    deleteFullProduct,
    addOneProduct,
    resetProducts,
} = shoppingCartSlice.actions;
export const { allProducts, amountProducts, fullPrice, priceWithDelivery } =
    shoppingCartSlice.selectors;
export default shoppingCartSlice.reducer;
