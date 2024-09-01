import prisma from '../../prisma/prisma';

export interface SearchParams {
    type?: string;
    from?: number;
    to?: number;
    sortBy?: string;
    category?: string;
    page?: string;
}

export const sortedProducts = async (params: SearchParams) => {
    const type = params.type;
    const minPrice = Number(params.from);
    const maxPrice = Number(params.to);
    const category = params.category;
    const sortBy = params.sortBy?.split('-') as [string, string];
    const page = Number(params.page);

    const LIMIT: number = 9;

    const productAmount = await prisma.product.count({
        where: {
            price: {
                gte: minPrice,
                lte: maxPrice,
            },
            sale: {
                not: type === 'sale' ? null : undefined,
            },
            category: {
                name: category,
            },
        },
        orderBy: [
            { [sortBy[0]]: sortBy[1] },
            {
                createdAt: type === 'new' ? 'asc' : 'desc',
            },
        ],
    });

    const products = await prisma.product.findMany({
        where: {
            price: {
                gte: minPrice,
                lte: maxPrice,
            },
            sale: {
                not: type === 'sale' ? null : undefined,
            },
            category: {
                name: category,
            },
        },
        orderBy: [
            { [sortBy[0]]: sortBy[1] },
            {
                createdAt: type === 'new' ? 'asc' : 'desc',
            },
        ],
        skip: (page - 1) * LIMIT,

        take: LIMIT,
    });

    const pages = Math.ceil(productAmount / LIMIT);

    return { products, pages };
};
