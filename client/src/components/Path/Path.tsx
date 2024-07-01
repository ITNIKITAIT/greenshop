import { useParams, useSearchParams } from 'react-router-dom';
import styles from './path.module.scss';

const Path = () => {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get('productId');

    return (
        <div className="container">
            <div className={styles.path}>
                <span>Home</span> / Shop
            </div>
        </div>
    );
};

export default Path;
