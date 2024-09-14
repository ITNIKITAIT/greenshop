import { wishlistApi } from '../../api/wishlistApi';
import { selectUserId } from '../../modules/auth.slice';
import { useAppSelector } from '../../store/store';
import styles from './profile.module.scss';
import WishItem from './WishItem';

const WishList = () => {
    const userId = useAppSelector(selectUserId);
    const { data: wishlist } = wishlistApi.useGetWishlistQuery(
        userId as number
    );

    return (
        <div className={styles.profileSection}>
            <h3>Wishlist</h3>
            {wishlist?.items.length === 0 || !wishlist ? (
                <div>Your wishlist is empty</div>
            ) : (
                <div className={styles.wishSection}>
                    {wishlist?.items.map((item) => (
                        <WishItem
                            key={item.id}
                            product={item.product}
                            userId={userId as number}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishList;
