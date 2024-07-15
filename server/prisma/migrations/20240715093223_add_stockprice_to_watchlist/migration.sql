/*
  Warnings:

  - Added the required column `stockPrice` to the `Watchlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Watchlist" ADD COLUMN     "stockPrice" INTEGER NOT NULL;
