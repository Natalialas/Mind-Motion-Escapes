/*
  Warnings:

  - You are about to drop the column `comment` on the `cartitem` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `cartitem` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `cartitem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `cartitem` DROP FOREIGN KEY `CartItem_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `cartitem` DROP FOREIGN KEY `CartItem_userId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_userId_fkey`;

-- AlterTable
ALTER TABLE `cartitem` DROP COLUMN `comment`,
    DROP COLUMN `orderId`,
    DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `order` ADD COLUMN `comment` VARCHAR(191) NULL,
    MODIFY `userId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
