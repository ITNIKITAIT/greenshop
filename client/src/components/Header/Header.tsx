import Logo from '../Logo/Logo';
import NavButtons from '../NavButtons/NavButtons';
import Navbar from '../Navbar/Navbar';
import styles from './header.module.scss';
import fetchCart from '../../modules/test';
import { useAppDispatch } from '../../store/store';

const Header = () => {
    const dispatch = useAppDispatch();
    dispatch(fetchCart());

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
