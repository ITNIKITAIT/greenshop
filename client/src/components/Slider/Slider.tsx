import styles from './slider.module.scss';

const Slider = () => {
    return (
        <div className="container">
            <section className={styles.slider}>
                <h4>Welcome to GreenShop</h4>
                <h1>
                    Let’s Make a Better <span>Planet</span>
                </h1>
                <p>
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                </p>
                <button className={'green-btn ' + styles.shopBtn}>
                    SHOP NOW
                </button>

                <img
                    className={styles.flowersImg}
                    src="/img/flowers.png"
                    alt="flowers"
                />
            </section>
        </div>
    );
};

export default Slider;
