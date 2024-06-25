import Logo from '../Logo/Logo';
import NavButtons from '../NavButtons/NavButtons';
import Navbar from '../Navbar/Navbar';
import styles from './header.module.scss';

const Header = () => {
    return (
        <div className="container">
            <header className={styles.header}>
                <Logo />
                <Navbar />
                <NavButtons />
            </header>
        </div>
    );
};

export default Header;
