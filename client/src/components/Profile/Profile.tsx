import { useNavigate } from 'react-router-dom';
import { isVerified } from '../../modules/auth.slice';
import { useAppSelector } from '../../store/store';
import { useEffect } from 'react';

const Profile = () => {
    const navigate = useNavigate();
    const isAuth = useAppSelector(isVerified);
    console.log(isAuth);
    useEffect(() => {
        if (!isAuth) navigate('/');
    }, [isAuth, navigate]);

    return <div>Your Profile</div>;
};

export default Profile;
