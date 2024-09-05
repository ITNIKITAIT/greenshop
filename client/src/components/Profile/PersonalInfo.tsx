import { selectUser } from '../../modules/auth.slice';
import { useAppSelector } from '../../store/store';
import styles from './profile.module.scss';

const PersonalInfo = () => {
    const user = useAppSelector(selectUser);
    console.log(user);
    return (
        <div className={styles.profileSection}>
            <h3>Personal Information</h3>

            <p className={styles.profileSection__info}>
                Fullname: <span>{user?.name}</span>
            </p>
            <p className={styles.profileSection__info}>
                Email: <span>{user?.email}</span>
            </p>
        </div>
    );
};

export default PersonalInfo;
