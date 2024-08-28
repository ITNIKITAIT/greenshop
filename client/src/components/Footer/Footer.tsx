import Logo from '../Logo/Logo';
import styles from './footer.module.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoMailOutline } from 'react-icons/io5';
import { PiPhoneCallThin } from 'react-icons/pi';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__list}>
                    <Logo />
                    <p>
                        <HiOutlineLocationMarker
                            className={styles.footer__icon}
                        />
                        70 West Buckingham Ave. Farmingdale, NY 11735
                    </p>
                    <p>
                        <IoMailOutline className={styles.footer__icon} />
                        contact@greenshop.com
                    </p>
                    <p>
                        <PiPhoneCallThin className={styles.footer__icon} />
                        +88 01911 717 490
                    </p>
                </div>
                <h3>© 2024 GreenShop. All Rights Reserved.</h3>
            </div>
        </footer>
    );
};

export default Footer;
