import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';
import styles from './hero.module.scss';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <section className={styles.hero}>
                <h4>Welcome to GreenShop</h4>
                <h1>
                    Let’s Make a Better <span>Planet</span>
                </h1>
                <p>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                </p>
                <button
                    className={'green-btn ' + styles.shopBtn}
                    onClick={() => navigate(SHOP_ROUTE)}>
                    SHOP NOW
                </button>

                <img
                    className={styles.flowersImg}
                    src="/img/flowers.png"
                    alt="flowers"
                />
                <img
                    className={styles.smallflowersImg}
                    src="/img/flowers.png"
                    alt="flowers"
                />
            </section>
        </div>
    );
};

export default Hero;
