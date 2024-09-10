-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "wishId" INTEGER;

-- CreateTable
CREATE TABLE "WishList" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WishList_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WishList_userId_key" ON "WishList"("userId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_wishId_fkey" FOREIGN KEY ("wishId") REFERENCES "WishList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WishList" ADD CONSTRAINT "WishList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
