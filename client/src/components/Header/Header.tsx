import { useAppDispatch } from '../../store/store';
import Logo from '../Logo/Logo';
import NavButtons from '../NavButtons/NavButtons';
import Navbar from '../Navbar/Navbar';
import styles from './header.module.scss';
import { fetchUser } from '../../modules/fetching';
import { useEffect } from 'react';

const Header = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('jwt')) {
            dispatch(fetchUser());
        }
    }, [dispatch]);

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
