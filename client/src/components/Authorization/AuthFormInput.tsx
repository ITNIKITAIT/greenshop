import { useFormContext } from 'react-hook-form';

interface Props {
    value: string;
    placeholder?: string;
}

const AuthFormInput = ({ value, placeholder }: Props) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const errorText = errors[value]?.message as string;

    return (
        <>
            <input
                autoComplete="off"
                placeholder={placeholder}
                type="text"
                {...register(value)}
            />
            {errorText && <div>{errorText}</div>}
        </>
    );
};

export default AuthFormInput;
