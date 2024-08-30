import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { sendEmail } from '../utils/sendEmail';
import { PayOrderTemplate } from '../email/emailTemplates/PayOrderTemplate';

interface IOrder {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    town: string;
    streetAddress: string;
    zip: string;
    notes?: string;
    totalAmount: number;
}

class OrderController {
    async createOrder(req: Request, res: Response) {
        const data: IOrder = req.body;
        const token = req.cookies.cartToken;
        console.log(token, data);
        try {
            if (!token) {
                res.json({ error: 'Failed to update cart' });
                return;
            }
            const cart = await prisma.cart.findFirst({
                where: {
                    token,
                },
                include: {
                    items: {
                        include: {
                            product: true,
                        },
                    },
                },
            });

            if (!cart) {
                res.json({ error: 'Cart not found' });
                return;
            }
            if (!cart?.items.length) {
                res.json({ error: 'Cart is empty' });
                return;
            }

            const order = await prisma.order.create({
                data: {
                    userId: 1,
                    fullName: data.firstName + ' ' + data.lastName,
                    email: data.email,
                    country: data.country,
                    city: data.town,
                    addrress: data.streetAddress,
                    zip: data.zip,
                    comment: data.notes,
                    items: JSON.stringify(cart.items),
                    totalAmount: data.totalAmount,
                },
            });

            await prisma.cartItem.deleteMany({
                where: {
                    cartId: cart.id,
                },
            });

            await sendEmail(
                data.email,
                'Payment',
                PayOrderTemplate(order.fullName, cart.items, data.totalAmount)
            );

            res.json(order);
        } catch (e) {
            console.log(e);
        }
    }
}
export default new OrderController();
