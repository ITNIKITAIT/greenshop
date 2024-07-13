import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';
import { sortedProducts } from '../utils/sortedProducts';

class ProductController {
    async getProducts(req: Request, res: Response) {
        const type = req.query.sort || 'all';
        try {
            const products = await sortedProducts(type);
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
        try {
            const reletedProducts = await prisma.product.findMany({
                take: 4,
            });
            res.json(reletedProducts);
        } catch (e) {
            console.log(e);
        }
    }
}

export default new ProductController();
