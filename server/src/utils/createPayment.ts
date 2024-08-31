import { CartItem, Order, Product } from '@prisma/client';
import { getPrice } from './getPrice';

export const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const createPayment = async (
    order: Order,
    items: (CartItem & { product: Product })[],
    deliveryPrice: number
) => {
    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}?paid=${order.id}`,
        cancel_url: `${process.env.CLIENT_URL}`,

        line_items: items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.product.name,
                },
                unit_amount:
                    getPrice(item.product.price, item.product.sale) * 100,
            },
            quantity: item.quantity,
        })),
        shipping_options: [
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: deliveryPrice * 100,
                        currency: 'usd',
                    },
                    display_name: 'Shipping',
                },
            },
        ],
        metadata: {
            order_id: order.id,
            order_amount: order.totalAmount,
            order_fullName: order.fullName,
            order_email: order.email,
        },
    });

    return session;
};
