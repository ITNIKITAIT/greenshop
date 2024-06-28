import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { HOME_ROUTE, SHOP_ROUTE } from './utils/consts';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
    {
        path: HOME_ROUTE,
        element: <HomePage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: SHOP_ROUTE,
        element: <div>HEllo</div>,
    },
]);
