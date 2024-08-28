import { z } from 'zod';

export const checkoutFormSchema = z.object({
    firstName: z
        .string()
        .min(4, { message: 'First name must contain at least 4 character(s)' }),
    lastName: z
        .string()
        .min(4, { message: 'Last name must contain at least 4 character(s)' }),
    country: z.string().min(1),
    town: z.string().min(1),
    streetAddress: z.string().min(1),
    zip: z
        .string()
        .min(1, 'ZIP code is required')
        .regex(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Invalid ZIP code format'),
    email: z.string().email(),
    notes: z
        .string()
        .max(300, { message: 'Notes must be 500 characters or less' })
        .optional(),
});

export type TSchema = z.infer<typeof checkoutFormSchema>;
