import { useState } from 'react';
import styles from './authorization.module.scss';
import { RxCross2 } from 'react-icons/rx';
import Register from './Register';
import Login from './Login';

interface Props {
    closeModalAuth: () => void;
}

const Authorization = ({ closeModalAuth }: Props) => {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const [passwordIsHidden, setPasswordIsHidden] = useState<boolean>(true);

    const togglePassword = () => {
        setPasswordIsHidden((prev) => !prev);
    };

    return (
        <div className={styles.authWrapper}>
            <div className={styles.auth}>
                <h1>
                    <span
                        style={{ color: `${isLogin ? '#46A358' : ''}` }}
                        onClick={() => setIsLogin(true)}>
                        Login
                    </span>{' '}
                    |{' '}
                    <span
                        style={{ color: `${!isLogin ? '#46A358' : ''}` }}
                        onClick={() => setIsLogin(false)}>
                        Register
                    </span>
                </h1>

                <p>
                    {isLogin
                        ? 'Enter your email and password to login.'
                        : 'Enter your data to register'}
                </p>

                {!isLogin ? (
                    <Register
                        closeModalAuth={closeModalAuth}
                        passwordIsHidden={passwordIsHidden}
                        togglePassword={togglePassword}
                    />
                ) : (
                    <Login
                        closeModalAuth={closeModalAuth}
                        passwordIsHidden={passwordIsHidden}
                        togglePassword={togglePassword}
                    />
                )}
                <RxCross2
                    className={styles.closeSvg}
                    onClick={closeModalAuth}
                />
            </div>
        </div>
    );
};

export default Authorization;
