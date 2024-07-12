import { Request, Response } from 'express';
import prisma from '../../prisma/prisma';

class ProductController {
    async getAllProducts(req: Request, res: Response) {
        try {
            const products = await prisma.product.findMany();
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
}

export default new ProductController();
