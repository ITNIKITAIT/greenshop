import { useFormContext } from 'react-hook-form';

interface Props {
    label: string;
    value: string;
    required?: boolean;
    placeholder?: string;
}

const CheckoutInput = ({
    label,
    value,
    placeholder,
    required = true,
}: Props) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const errorText = errors[value]?.message as string;

    return (
        <label>
            <p>
                {label}
                {required && <span>*</span>}
            </p>
            <input
                placeholder={placeholder}
                type="text"
                autoComplete="off"
                {...register(value)}
            />
            {errorText && <div>{errorText}</div>}
        </label>
    );
};

export default CheckoutInput;
