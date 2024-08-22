import prisma from './prisma';
import { hashSync } from 'bcrypt';
import { cartItems, carts, categories, products } from './consts';

async function up() {
    await prisma.user.createMany({
        data: [
            {
                name: 'User test',
                email: 'test@gmail.com',
                password: hashSync('qweqwe', 10),
            },
            {
                name: 'Admin',
                email: 'test2@gmail.com',
                password: hashSync('qweqwe', 10),
                role: 'ADMIN',
            },
        ],
    });

    await prisma.category.createMany({ data: categories });
    await prisma.product.createMany({ data: products });
    await prisma.cart.createMany({ data: carts });
    await prisma.cartItem.createMany({ data: cartItems });
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}
async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
