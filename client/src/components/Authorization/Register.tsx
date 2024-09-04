import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BiHide } from 'react-icons/bi';
import styles from './authorization.module.scss';
import AuthFormInput from './AuthFormInput';
import { formRegisterSchema, TFormRegisterSchema } from './auth-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { authApi } from '../../api/authApi';
import { useAppDispatch } from '../../store/store';
import { setToken } from '../../modules/auth.slice';
import toast from 'react-hot-toast';

interface Props {
    passwordIsHidden: boolean;
    togglePassword: () => void;
    closeModalAuth: () => void;
}

const Register = ({
    togglePassword,
    passwordIsHidden,
    closeModalAuth,
}: Props) => {
    const form = useForm<TFormRegisterSchema>({
        resolver: zodResolver(formRegisterSchema),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = form;

    const dispatch = useAppDispatch();

    const [onRegister] = authApi.useRegisterMutation();

    const getAuth: SubmitHandler<TFormRegisterSchema> = async (
        data: TFormRegisterSchema
    ) => {
        const { data: response, error } = await onRegister(data);
        if (response) {
            dispatch(setToken(response.token));
            toast('Please confirm your email', {
                icon: '✍️',
            });
            closeModalAuth();
        }
        if (error) {
            toast.error(JSON.stringify(error));
        }
    };

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(getAuth)}>
                <AuthFormInput
                    placeholder="Enter your emal address"
                    value="email"
                />
                <AuthFormInput placeholder="Username" value="userName" />
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

                <div className={styles.inputPassword}>
                    <input
                        style={{
                            letterSpacing: passwordIsHidden ? '2px' : '0.05px',
                        }}
                        autoComplete="off"
                        placeholder="Comfirm password"
                        type={`${passwordIsHidden ? 'password' : 'text'}`}
                        {...register('repeatPassword')}
                    />
                    {errors.repeatPassword && (
                        <div>{errors.repeatPassword.message as string}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className={'green-btn ' + styles.loginBtn}>
                    Register
                </button>
            </form>
        </FormProvider>
    );
};

export default Register;
