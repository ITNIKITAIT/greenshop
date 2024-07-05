import styles from './authorization.module.scss';
import { RxCross2 } from 'react-icons/rx';

interface Props {
    setAuth: (modal: boolean) => void;
}

const Authorization = ({ setAuth }: Props) => {
    return (
        <div className={styles.authWrapper}>
            <div className={styles.auth}>
                <h1>Login | Register</h1>

                <RxCross2
                    className={styles.closeSvg}
                    onClick={() => setAuth(false)}
                />
            </div>
        </div>
    );
};

export default Authorization;
