/*
  Warnings:

  - You are about to drop the column `wishId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_wishId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "wishId";

-- CreateTable
CREATE TABLE "WishItem" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "wishlistId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WishItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WishItem" ADD CONSTRAINT "WishItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishItem" ADD CONSTRAINT "WishItem_wishlistId_fkey" FOREIGN KEY ("wishlistId") REFERENCES "WishList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
