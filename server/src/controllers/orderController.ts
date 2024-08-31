import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { sendEmail } from '../utils/sendEmail';
import { PayOrderTemplate } from '../email/emailTemplates/PayOrderTemplate';
import { createPayment, stripe } from '../utils/createPayment';
import { SuccesOrder } from '../email/emailTemplates/SuccesOrder';

interface IOrder {
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

    async getOrderByID(req: Request, res: Response) {
        const { orderId } = req.params;
        const order = await prisma.order.findFirst({
            where: {
                id: Number(orderId),
            },
        });
        res.json(order);
    }
}
export default new OrderController();
