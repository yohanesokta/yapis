/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "akunuser" (
    "id" SERIAL NOT NULL,
    "tokens" INTEGER NOT NULL DEFAULT 0,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "akunuser_pkey" PRIMARY KEY ("id")
);
