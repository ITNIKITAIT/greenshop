import {
    FieldValues,
    FormProvider,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { BiHide } from 'react-icons/bi';
import styles from './authorization.module.scss';
import AuthFormInput from './AuthFormInput';
import { formRegisterSchema, TFormRegisterSchema } from './auth-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props {
    passwordIsHidden: boolean;
    togglePassword: () => void;
}

const Register = ({ togglePassword, passwordIsHidden }: Props) => {
    const form = useForm<TFormRegisterSchema>({
        resolver: zodResolver(formRegisterSchema),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = form;

    const getAuth: SubmitHandler<FieldValues> = (data: FieldValues) => {
        console.log(data);
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
