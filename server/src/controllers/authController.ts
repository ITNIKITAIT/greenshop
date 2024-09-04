import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { hashSync, compareSync } from 'bcrypt';
import { generateToken } from '../utils/generateToken';
import { generateCode } from '../utils/generateCode';
import { sendEmail } from '../utils/sendEmail';
import { VerificationCodeTemplate } from '../email/emailTemplates/VerificationCodeTemplate';

class authController {
    async login(req: Request, res: Response) {
        const { password, email } = req.body;

        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }

        if (!user.verified) {
            return res.status(400).json({ message: 'User is not verified' });
        }

        const isPasswordValid = compareSync(password, user.password);

        if (!isPasswordValid) {
            return res
                .status(400)
                .json({ message: 'Incorrect email or password' });
        }

        const token = generateToken(user);

        res.json({
            token,
            user: {
                name: user.name,
                verified: user.verified,
                email: user.email,
            },
        });
    }
    async register(req: Request, res: Response) {
        const { userName, password, email } = req.body;

        const isExist = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (isExist) {
            return res.status(400).json('User with this email already exists');
        }

        const hashedPassword = hashSync(password, 10);

        const newUser = await prisma.user.create({
            data: {
                email,
                name: userName,
                password: hashedPassword,
            },
        });

        const verificationCode = await prisma.verificationCode.create({
            data: {
                userId: newUser.id,
                code: generateCode().toString(),
            },
        });

        sendEmail(
            email,
            'Confirm your email',
            VerificationCodeTemplate(verificationCode.code)
        );

        const token = generateToken(newUser);

        res.json({
            token,
            newUser,
        });
    }
    async check(req: Request, res: Response) {
        const decoded = req.body.decoded;

        const user = await prisma.user.findFirst({
            where: {
                id: decoded.id,
            },
        });

        if (!user) {
            return res.status(400).json({ message: "User doesn't exist" });
        }

        if (!user.verified) {
            return res.status(400).json({ message: 'User is not verified' });
        }

        const token = generateToken(decoded);

        res.json({
            token,
            user: {
                name: user.name,
                verified: user.verified,
                email: user.email,
            },
        });
    }

    async verify(req: Request, res: Response) {
        const code = req.params.code;

        const verificationCode = await prisma.verificationCode.findFirst({
            where: {
                code,
            },
        });
        if (!verificationCode) {
            return res.status(400).json({ message: 'Code is incorrect' });
        }

        const user = await prisma.user.update({
            where: {
                id: verificationCode.userId,
            },
            data: {
                verified: true,
            },
        });

        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        await prisma.verificationCode.delete({
            where: {
                id: verificationCode.id,
            },
        });

        res.redirect(process.env.CLIENT_URL as string);
    }
}

export default new authController();
