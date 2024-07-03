-- CreateTable
CREATE TABLE "Expense" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "accountId" INTEGER NOT NULL,
    "expenseType" TEXT NOT NULL,
    "expenseName" TEXT NOT NULL,
    "expenseDescription" TEXT,
    "expenseDate" TIMESTAMP(3) NOT NULL,
    "isRecurring" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
