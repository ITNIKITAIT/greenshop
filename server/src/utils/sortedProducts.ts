import prisma from '../../prisma/prisma';

export const sortedProducts = async (type: any) => {
    switch (type) {
        case 'all':
            return await prisma.product.findMany();
        case 'new':
            return await prisma.product.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
            });
        case 'sale':
            return await prisma.product.findMany({
                where: {
                    sale: {
                        not: null,
                    },
                },
            });
    }
};
