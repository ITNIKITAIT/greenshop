import prisma from '../../prisma/prisma';

export const sortedProducts = async (type: any, from: any, to: any) => {
    const minPrice = parseFloat(from);
    const maxPrice = parseFloat(to);

    if (from && to) {
        switch (type) {
            case 'new':
                return await prisma.product.findMany({
                    orderBy: {
                        createdAt: 'desc',
                    },
                    where: {
                        price: {
                            gte: minPrice,
                            lte: maxPrice,
                        },
                    },
                });
            case 'all':
                return await prisma.product.findMany({
                    where: {
                        price: {
                            gte: minPrice,
                            lte: maxPrice,
                        },
                    },
                });
            case 'sale':
                return await prisma.product.findMany({
                    where: {
                        sale: {
                            not: null,
                        },
                        price: {
                            gte: minPrice,
                            lte: maxPrice,
                        },
                    },
                });
        }
    } else {
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
    }
};
