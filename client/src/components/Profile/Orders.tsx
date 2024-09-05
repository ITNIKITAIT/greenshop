import { orderApi } from '../../api/orderApi';
import { selectUserId } from '../../modules/auth.slice';
import { useAppSelector } from '../../store/store';
import OrderItem from './OrderItem';
import styles from './profile.module.scss';

const Orders = () => {
    const userId = useAppSelector(selectUserId);
    const { data: orders } = orderApi.useGetOrdersByUserQuery(userId as number);

    return (
        <div className={styles.profileSection}>
            <h3>Your Orders</h3>
            <div className={styles.orderSection}>
                {orders?.map((order) => (
                    <OrderItem key={order.id} {...order} />
                ))}
            </div>
        </div>
    );
};

export default Orders;
