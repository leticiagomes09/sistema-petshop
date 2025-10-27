/*
  Warnings:

  - You are about to drop the `bruxos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."bruxos";

-- CreateTable
CREATE TABLE "animais" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "dono" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "animais_pkey" PRIMARY KEY ("id")
);
