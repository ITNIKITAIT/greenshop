import { Cart } from '@prisma/client';
import prisma from '../../prisma/prisma';

export const findOrCreateCart = async (
    token: string,
    userId?: number
): Promise<Cart> => {
    let cart = await prisma.cart.findFirst({
        where: {
            token,
        },
    });

    if (!cart) {
        cart = await prisma.cart.create({
            data: {
                token,
                userId,
            },
        });
    }

    return cart;
};
