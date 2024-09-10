import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';

interface WishListProps {
    productId: number;
    userId: number;
}

class wishlistController {
    async getWishList(req: Request, res: Response) {
        const userId = req.params.userId;
        try {
            const wishlist = await prisma.wishList.findFirst({
                where: {
                    userId: Number(userId),
                },
                include: {
                    items: {
                        include: {
                            product: true,
                        },
                    },
                },
            });

            if (wishlist) {
                return res.json(wishlist);
            } else {
                return res.status(404).json({ message: 'Wishlist not found' });
            }
        } catch (e) {
            console.log(e);
        }
    }
    async addWishItem(req: Request, res: Response) {
        const { userId, productId }: WishListProps = req.body;

        try {
            let wishlist = await prisma.wishList.findFirst({
                where: {
                    userId,
                },
            });

            if (!wishlist) {
                wishlist = await prisma.wishList.create({
                    data: {
                        userId,
                    },
                });
            }
            if (!productId)
                return res.status(404).json({ message: 'Product not found' });

            const existingProduct = await prisma.wishItem.findFirst({
                where: {
                    productId,
                    wishlistId: wishlist!.id,
                },
            });

            if (existingProduct)
                return res
                    .status(200)
                    .json({ message: 'product already exists' });

            await prisma.wishItem.create({
                data: {
                    productId,
                    wishlistId: wishlist.id,
                },
            });

            res.json(wishlist);
        } catch (e) {
            console.log(e);
        }
    }
    async removeWishItem(req: Request, res: Response) {
        const { userId, productId }: WishListProps = req.body;

        try {
            const wishlist = await prisma.wishList.findFirst({
                where: {
                    userId,
                },
            });

            if (!productId)
                return res.status(404).json({ message: 'Product not found' });

            const wishItem = await prisma.wishItem.findFirst({
                where: {
                    productId,
                    wishlistId: wishlist!.id,
                },
            });

            if (!wishItem)
                return res.status(404).json({ message: 'Product not found' });

            await prisma.wishItem.delete({
                where: {
                    id: wishItem.id,
                },
            });

            res.json(wishlist);
        } catch (e) {
            console.log(e);
        }
    }
}

export default new wishlistController();
