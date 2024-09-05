import { useNavigate } from 'react-router-dom';
import { isVerified } from '../../modules/auth.slice';
import { useAppSelector } from '../../store/store';
import { useEffect, useState } from 'react';
import styles from './profile.module.scss';
import { FaRegUser } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { BsHeart } from 'react-icons/bs';
import PersonalInfo from './PersonalInfo';
import WishList from './WishList';
import Orders from './Orders';
import Logout from '../Logout/Logout';

type State = 'account' | 'wishlist' | 'orders';

const Profile = () => {
    const navigate = useNavigate();
    const isAuth = useAppSelector(isVerified);
    const [property, setProperty] = useState<State>('account');

    useEffect(() => {
        if (!isAuth) navigate('/');
    }, [isAuth, navigate]);

    return (
        <div className="container">
            <div className={styles.profile}>
                <div className={styles.profile__sidebar}>
                    <h3>My Account</h3>
                    <ul>
                        <li
                            onClick={() => setProperty('account')}
                            className={
                                property === 'account'
                                    ? styles.property__active
                                    : ''
                            }>
                            <FaRegUser fontSize={18} />
                            Account Details
                        </li>
                        <li
                            onClick={() => setProperty('orders')}
                            className={
                                property === 'orders'
                                    ? styles.property__active
                                    : ''
                            }>
                            <IoCartOutline fontSize={20} />
                            Orders
                        </li>
                        <li
                            onClick={() => setProperty('wishlist')}
                            className={
                                property === 'wishlist'
                                    ? styles.property__active
                                    : ''
                            }>
                            <BsHeart fontSize={18} />
                            Wishlist
                        </li>
                    </ul>
                    <Logout />
                </div>
                {property === 'account' && <PersonalInfo />}
                {property === 'orders' && <Orders />}
                {property === 'wishlist' && <WishList />}
            </div>
        </div>
    );
};

export default Profile;
