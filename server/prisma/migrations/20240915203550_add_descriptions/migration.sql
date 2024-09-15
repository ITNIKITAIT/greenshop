/*
  Warnings:

  - Made the column `fullDesc` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shortDesc` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "fullDesc" SET NOT NULL,
ALTER COLUMN "shortDesc" SET NOT NULL;
