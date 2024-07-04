-- CreateTable
CREATE TABLE "Income" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "incomeName" TEXT NOT NULL,
    "incomeType" INTEGER NOT NULL,
    "incomeAmount" DOUBLE PRECISION NOT NULL,
    "incomeStartDate" TIMESTAMP(3) NOT NULL,
    "incomeEndDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
