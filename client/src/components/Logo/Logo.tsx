import { useNavigate } from 'react-router-dom';
import logo from './Logo.svg';
import { HOME_ROUTE } from '../../utils/consts';

const Logo = () => {
    const navigate = useNavigate();

    return (
        <img
            onClick={() => navigate(HOME_ROUTE)}
            style={{ cursor: 'pointer' }}
            className="logo"
            src={logo}
            alt="logo"
        />
    );
};

export default Logo;
