import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BiHide } from 'react-icons/bi';
import styles from './authorization.module.scss';
import AuthFormInput from './AuthFormInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { formLoginSchema, TFormLoginSchema } from './auth-form-schema';
import { authApi } from '../../api/authApi';
import { useAppDispatch } from '../../store/store';
import { setToken, setUser } from '../../modules/auth.slice';
import toast from 'react-hot-toast';

interface Props {
    passwordIsHidden: boolean;
    togglePassword: () => void;
    closeModalAuth: () => void;
}

const Login = ({ togglePassword, passwordIsHidden, closeModalAuth }: Props) => {
    const form = useForm<TFormLoginSchema>({
        resolver: zodResolver(formLoginSchema),
    });
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = form;

    const dispatch = useAppDispatch();

    const [onLogin] = authApi.useLoginMutation();

    const getAuth: SubmitHandler<TFormLoginSchema> = async (
        data: TFormLoginSchema
    ) => {
        const { data: response, error } = await onLogin(data);
        if (response) {
            dispatch(setToken(response.token));
            dispatch(setUser(response.user));
            toast.success('You have successfully logged in');
            closeModalAuth();
        }
        if (error) {
            toast.error(
                'data' in error
                    ? (error.data as { message: string }).message
                    : 'An unknown error occurred'
            );
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(getAuth)}>
                <AuthFormInput
                    placeholder="Enter your emal address"
                    value="email"
                />
                <div className={styles.inputPassword}>
                    <input
                        style={{
                            letterSpacing: passwordIsHidden ? '2px' : '0.05px',
                        }}
                        autoComplete="off"
                        placeholder="Password"
                        type={`${passwordIsHidden ? 'password' : 'text'}`}
                        {...register('password')}
                    />
                    <BiHide
                        onClick={togglePassword}
                        className={styles.hideIcon}
                    />
                    {errors.password && (
                        <div>{errors.password.message as string}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className={'green-btn ' + styles.loginBtn}>
                    Login
                </button>
            </form>
        </FormProvider>
    );
};

export default Login;
