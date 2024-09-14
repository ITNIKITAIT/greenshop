import { useEffect } from 'react';
import { cartApi } from '../api/cartApi';
import { wishlistApi } from '../api/wishlistApi';
import toast from 'react-hot-toast';

export const useAddButtons = () => {
    const [addCartItem, cartResult] = cartApi.useAddCartItemMutation();
    const [addWishItem, wishResult] = wishlistApi.useAddWishItemMutation();
    const [removeWishItem] = wishlistApi.useRemoveWishItemMutation();

    useEffect(() => {
        if (cartResult.isError) toast.error('Failed to add to cart');
        if (cartResult.isSuccess) toast.success('Added to cart');
        if (wishResult.isError) toast.error('Failed to add to wishlist');
    }, [cartResult, wishResult]);

    return { addCartItem, addWishItem, removeWishItem };
};
