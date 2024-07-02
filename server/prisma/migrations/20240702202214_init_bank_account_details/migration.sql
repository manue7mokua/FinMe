-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "accountNumber" INTEGER NOT NULL,
    "accountName" TEXT NOT NULL,
    "cardExpiryDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
