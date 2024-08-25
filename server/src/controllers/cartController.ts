import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { findOrCreateCart } from '../utils/findOrCreateCart';

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
                            orderBy: { createdAt: 'asc' },
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

        try {
            if (!token) {
                res.json({ error: 'Failed to update cart' });
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
    async deleteCartItem(req: Request, res: Response) {
        const { id } = req.params;
        const token = req.cookies.cartToken;
        try {
            if (!token) {
                res.json({ error: 'Cart item not found' });
            } else {
                await prisma.cartItem.delete({
                    where: {
                        id: Number(id),
                    },
                });
                res.json('Item was deleted successfully');
            }
        } catch (e) {
            console.log(e);
        }
    }
    async addCartItem(req: Request, res: Response) {
        const product = req.body.product;
        let token = req.cookies.cartToken;

        try {
            if (!token) {
                token = crypto.randomUUID();
            }
            const userCart = await findOrCreateCart(token);

            const cartItem = await prisma.cartItem.findFirst({
                where: {
                    cartId: userCart.id,
                    productId: product.id,
                },
            });

            if (cartItem) {
                await prisma.cartItem.update({
                    where: {
                        id: cartItem.id,
                    },
                    data: {
                        quantity: product.quantity + cartItem.quantity,
                    },
                });
            } else {
                await prisma.cartItem.create({
                    data: {
                        cartId: userCart.id,
                        productId: product.id,
                        quantity: product.quantity,
                    },
                });
            }
            res.cookie('cartToken', token);
            res.send('Success');
        } catch (e) {
            console.log(e);
        }
    }
}

export default new CartController();
