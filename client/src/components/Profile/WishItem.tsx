import { useNavigate } from 'react-router-dom';
import { wishlistApi } from '../../api/wishlistApi';
import { withDiscount } from '../../utils/discountFunc';
import { IProduct } from '../Products/Products';
import { RxCross2 } from 'react-icons/rx';
import { getProductRoute } from '../../utils/consts';

interface Props {
    userId: number;
    product: IProduct;
}

const WishItem = ({ userId, product }: Props) => {
    const navigate = useNavigate();

    const [removeWishItem] = wishlistApi.useRemoveWishItemMutation();

    const remove = () => {
        removeWishItem({ productId: product.id, userId });
    };

    return (
        <div>
            <section onClick={() => navigate(getProductRoute(product.id))}>
                <img src="/img/flowers.png" alt="flower" />
                <h4>{product.name}</h4>
            </section>
            <p>{withDiscount(product.price, product.sale)}$</p>
            <RxCross2
                onClick={remove}
                style={{ cursor: 'pointer', fontSize: '22px' }}
            />
        </div>
    );
};

export default WishItem;
