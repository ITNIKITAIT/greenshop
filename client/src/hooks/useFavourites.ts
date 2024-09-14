import { skipToken } from '@reduxjs/toolkit/query';
import { wishlistApi } from '../api/wishlistApi';
import { selectUserId } from '../modules/auth.slice';
import { useAppDispatch, useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { fetchWishList } from '../modules/fetching';
import toast from 'react-hot-toast';
import { useAddButtons } from './useAddButtons';
import { IProduct } from '../components/Products/Products';

const useFavourites = () => {
    const dispatch = useAppDispatch();

    const userId = useAppSelector(selectUserId);
    const { data: wishList } = wishlistApi.useGetWishlistQuery(
        userId ?? skipToken
    );

    const { addWishItem, removeWishItem } = useAddButtons();

    useEffect(() => {
        if (userId) {
            dispatch(fetchWishList(userId));
        }
    }, [userId, dispatch, wishList]);

    const addToWishlist = (product: IProduct) => {
        if (!userId) {
            toast.error(
                'You must first register to add a product to your wishlist.'
            );
        } else {
            addWishItem({ productId: product.id, userId });
        }
    };
    const removeFromWishlist = (product: IProduct) => {
        if (userId) {
            removeWishItem({ productId: product.id, userId });
        }
    };

    return { addToWishlist, removeFromWishlist };
};

export default useFavourites;
