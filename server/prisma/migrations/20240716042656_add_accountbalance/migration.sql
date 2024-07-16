/*
  Warnings:

  - Added the required column `accountBalance` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expenseAmount` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "accountBalance" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "expenseAmount" INTEGER NOT NULL;
