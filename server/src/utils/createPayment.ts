import { CartItem, Product } from '@prisma/client';

export const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export const createPayment = async (
    items: (CartItem & { product: Product })[]
) => {
    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}`,
        cancel_url: `${process.env.CLIENT_URL}/shop`,

        line_items: items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.product.name,
                },
                unit_amount: item.product.price * 100,
            },
            quantity: item.quantity,
        })),
    });

    return session;
};
