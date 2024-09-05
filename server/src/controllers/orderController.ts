import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { sendEmail } from '../utils/sendEmail';
import { PayOrderTemplate } from '../email/emailTemplates/PayOrderTemplate';
import { createPayment } from '../utils/createPayment';
import { SuccesOrder } from '../email/emailTemplates/SuccesOrder';

interface IOrder {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    town: string;
    streetAddress: string;
    zip: string;
    notes?: string;
    totalPrice: number;
    deliveryPrice: number;
}

class OrderController {
    async createOrder(req: Request, res: Response) {
        const data: IOrder = req.body;
        const token = req.cookies.cartToken;

        try {
            if (!token) {
                res.json({ error: 'Failed to update cart' });
                return;
            }
            const cart = await prisma.cart.findFirst({
                where: {
                    userId: data.userId,
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
                return res.status(401).json({ error: 'Cart not found' });
            }
            if (!cart?.items.length) {
                return res.status(401).json({ error: 'Cart is empty' });
            }

            const order = await prisma.order.create({
                data: {
                    userId: data.userId,
                    fullName: data.firstName + ' ' + data.lastName,
                    email: data.email,
                    country: data.country,
                    city: data.town,
                    addrress: data.streetAddress,
                    zip: data.zip,
                    comment: data.notes,
                    items: JSON.stringify(cart.items),
                    totalAmount: data.totalPrice,
                },
            });

            const session = await createPayment(
                order,
                cart.items,
                data.deliveryPrice
            );

            await prisma.order.update({
                where: {
                    id: order.id,
                },
                data: {
                    paymentId: session.id,
                },
            });

            await sendEmail(
                data.email,
                'Payment',
                PayOrderTemplate(
                    order.fullName,
                    cart.items,
                    data.totalPrice,
                    data.deliveryPrice,
                    session.url
                )
            );

            await prisma.cartItem.deleteMany({
                where: {
                    cartId: cart.id,
                },
            });

            res.json(session.url);
        } catch (e) {
            console.log(e);
        }
    }
    async updateOrder(req: Request, res: Response) {
        const body = req.body;
        switch (body.type) {
            case 'checkout.session.completed':
                const paymentIntent = body.data.object;
                const order = paymentIntent.metadata;
                await prisma.order.update({
                    where: {
                        id: Number(order.order_id),
                    },
                    data: {
                        status: 'SUCCEEDED',
                    },
                });

                await sendEmail(
                    order.order_email,
                    'Success',
                    SuccesOrder(order)
                );

                break;
            case 'payment_intent.payment_failed':
                const paymentFailedIntent = body.data.object;
                console.log('PaymentIntent failed:', paymentFailedIntent);
                break;
            default:
                break;
        }
        try {
        } catch (e) {
            console.log(e);
        }
    }

    async getOrderById(req: Request, res: Response) {
        const { orderId } = req.params;
        const order = await prisma.order.findFirst({
            where: {
                id: Number(orderId),
            },
        });
        res.json(order);
    }
    async getOrdersyUserId(req: Request, res: Response) {
        const { userId } = req.params;
        const orders = await prisma.order.findMany({
            where: {
                userId: Number(userId),
            },
        });
        res.json(orders);
    }
}
export default new OrderController();
