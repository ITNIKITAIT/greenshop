import { z } from 'zod';

// export const passwordSchema = z
//     .string()
//     .min(6, 'Password must be more than 6 symbols');

export const formLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be more than 6 symbols'),
});

export const formRegisterSchema = formLoginSchema
    .merge(
        z.object({
            userName: z.string().min(2, 'Username must be more than 2 symbols'),
            repeatPassword: z.string(),
        })
    )
    .refine((data) => data.password === data.repeatPassword, {
        message: "Passwords don't match",
        path: ['repeatPassword'],
    });

export type TFormLoginSchema = z.infer<typeof formLoginSchema>;
export type TFormRegisterSchema = z.infer<typeof formRegisterSchema>;
