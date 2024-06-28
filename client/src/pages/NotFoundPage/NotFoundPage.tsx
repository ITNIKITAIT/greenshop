import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../utils/consts';
import './NotFoundPage.scss';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="notFound__wrapper">
            <div className="oops-text">Oops!</div>
            <div className="error-text">404 - PAGE NOT FOUND</div>
            <div className="description-text">
                The page you are looking for might have been removed, had its
                name changed or is temporarily unavailable.
            </div>
            <button
                className="green-btn homeBtn"
                onClick={() => navigate(HOME_ROUTE)}>
                GO TO HOMEPAGE
            </button>
        </div>
    );
};

export default NotFoundPage;
