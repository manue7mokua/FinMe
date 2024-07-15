/*
  Warnings:

  - Added the required column `companyIcon` to the `Watchlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `performancePercentage` to the `Watchlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Watchlist" ADD COLUMN     "companyIcon" TEXT NOT NULL,
ADD COLUMN     "performancePercentage" TEXT NOT NULL;
