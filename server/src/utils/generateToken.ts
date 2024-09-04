import { User, UserRole } from '@prisma/client';
import jwt from 'jsonwebtoken';

interface TokenPayload {
    id: number;
    email: string;
    role: UserRole;
}

export const generateToken = (user: User) => {
    const payload: TokenPayload = {
        id: user.id,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, process.env.JWT_SECRET_TOKEN as string, {
        expiresIn: '24h',
    });
};
