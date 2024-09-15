import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { sortedProducts } from '../utils/sortedProducts';

class ProductController {
    async getProducts(req: Request, res: Response) {
        try {
            const products = await sortedProducts(req.query);
            res.json(products);
        } catch (e) {
            console.log(e);
        }
    }
    async getProductById(req: Request, res: Response) {
        const productId = req.params.id;
        try {
            const product = await prisma.product.findFirst({
                where: {
                    id: parseInt(productId),
                },
            });
            res.json(product);
        } catch (e) {
            console.log(e);
        }
    }
    async getReletedProducts(req: Request, res: Response) {
        const limit = 4;
        const productId = Number(req.query.productId);

        try {
            const currentProduct = await prisma.product.findFirst({
                where: {
                    id: productId,
                },
            });
            if (!currentProduct) {
                res.json({ error: "Product doesn't exist" });
                return;
            }

            const reletedProducts = await prisma.product.findMany({
                where: {
                    id: {
                        not: productId,
                    },
                    categoryId: currentProduct.categoryId,
                },
                take: 4,
            });

            if (reletedProducts.length < 5) {
                const additionalProducts = await prisma.product.findMany({
                    where: {
                        id: {
                            notIn: reletedProducts
                                .map((p) => p.id)
                                .concat([productId]),
                        },
                    },
                    take: limit - reletedProducts.length,
                });
                res.json([...reletedProducts, ...additionalProducts]);
            } else {
                res.json(reletedProducts);
            }
        } catch (e) {
            console.log(e);
        }
    }

    async getQueryProducts(req: Request, res: Response) {
        const query = req.query.q || '';

        try {
            const products = await prisma.product.findMany({
                where: {
                    name: {
                        contains: query as string,
                        mode: 'insensitive',
                    },
                },
                take: 5,
            });
            res.json(products);
        } catch (e) {
            console.log(e);
        }
    }

    async getCategories(req: Request, res: Response) {
        try {
            const categories = await prisma.category.findMany({
                include: {
                    _count: true,
                },
            });
            res.json(categories);
        } catch (e) {
            console.log(e);
        }
    }
    async getProductCategory(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const category = await prisma.category.findFirst({
                where: { id: Number(id) },
            });
            res.json(category);
        } catch (e) {
            console.log(e);
        }
    }
}

export default new ProductController();
