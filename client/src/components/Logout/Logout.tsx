import { TbLogin2 } from 'react-icons/tb';
import { useAppDispatch } from '../../store/store';
import { logout } from '../../modules/auth.slice';

const Logout = () => {
    const dispatch = useAppDispatch();
    const logoutHandler = () => {
        dispatch(logout(''));
    };
    return (
        <button onClick={logoutHandler}>
            <TbLogin2 fontSize={25} />
            Logout
        </button>
    );
};

export default Logout;
