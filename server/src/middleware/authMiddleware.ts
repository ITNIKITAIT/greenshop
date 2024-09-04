import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: any
) => {
    const token = req.headers['authorization']?.split(' ')[1];
    try {
        if (!token) {
            return res.sendStatus(401).json({ message: 'Unathorized' });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET_TOKEN as string
        );

        if (!decoded) {
            return res.sendStatus(401).json({ message: 'Unathorized' });
        }

        req.body.decoded = decoded;

        next();
    } catch (e) {
        console.log(e);
    }
};
