import { useState } from 'react';
import styles from './authorization.module.scss';
import { RxCross2 } from 'react-icons/rx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BiHide } from 'react-icons/bi';

interface Props {
    setAuth: (modal: boolean) => void;
}

type Inputs = {
    username?: string;
    email: string;
    password: string;
    Repeatpassword?: string;
};

const Authorization = ({ setAuth }: Props) => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const { register, handleSubmit } = useForm<Inputs>();
    const [passwordIsHidden, setPasswordHidden] = useState<boolean>(true);

    const toggle = () => {
        setPasswordHidden((prev) => !prev);
    };

    const getAuth: SubmitHandler<Inputs> = (data: Inputs) => {
        console.log(data);
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

                <p>Enter your username and password to login.</p>
                <form onSubmit={handleSubmit(getAuth)}>
                    {!isLogin && (
                        <input
                            autoComplete="off"
                            placeholder="Username"
                            type="text"
                            {...register('username')}
                        />
                    )}
                    <input
                        autoComplete="off"
                        placeholder="Enter your emal address"
                        type="email"
                        {...register('email')}
                    />
                    <div className={styles.inputPassword}>
                        <input
                            autoComplete="off"
                            placeholder="Password"
                            type={`${passwordIsHidden ? 'password' : 'text'}`}
                            {...register('password')}
                        />
                        <BiHide onClick={toggle} className={styles.hideIcon} />
                    </div>
                    {!isLogin && (
                        <div className={styles.inputPassword}>
                            <input
                                autoComplete="off"
                                placeholder="Comfirm password"
                                type={`${
                                    passwordIsHidden ? 'password' : 'text'
                                }`}
                                {...register('Repeatpassword')}
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className={'green-btn ' + styles.loginBtn}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                <RxCross2
                    className={styles.closeSvg}
                    onClick={() => setAuth(false)}
                />
            </div>
        </div>
    );
};

export default Authorization;
