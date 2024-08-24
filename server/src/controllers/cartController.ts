import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';

class CartController {
    async getCart(req: Request, res: Response) {
        const token = req.cookies.cartToken;

        try {
            if (!token) {
                res.json({ items: [] });
            } else {
                const cart = await prisma.cart.findFirst({
                    where: {
                        token,
                    },
                    include: {
                        items: {
                            orderBy: { createdAt: 'desc' },
                            include: {
                                product: true,
                            },
                        },
                    },
                });
                res.json(cart);
            }
        } catch (e) {
            console.log(e);
        }
    }
    async updateCart(req: Request, res: Response) {
        const { id } = req.params;
        const quantity = req.body.quantity;
        const token = req.cookies.cartToken;
        console.log(req.body, id);
        try {
            if (!token) {
                res.json({ items: [] });
            } else {
                const cartItem = await prisma.cartItem.update({
                    where: {
                        id: Number(id),
                    },
                    data: {
                        quantity,
                    },
                });
                res.json(cartItem);
            }
        } catch (e) {
            console.log(e);
        }
    }
}

export default new CartController();
