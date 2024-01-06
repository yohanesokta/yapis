/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `akunuser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "akunuser_username_key" ON "akunuser"("username");
