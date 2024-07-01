import { useLocation } from 'react-router-dom';
import styles from './path.module.scss';

const Path = () => {
    const location = useLocation();
    const pathnames = location.pathname
        .split('/')
        .filter((x) => x && !/^\d+$/.test(x));

    return (
        <div className="container">
            <div className={styles.path}>
                <span>Home</span>
                {pathnames.map((path) => ` / ${path}`)}
            </div>
        </div>
    );
};

export default Path;
