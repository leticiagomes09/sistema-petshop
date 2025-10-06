-- CreateTable
CREATE TABLE "bruxos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "dono" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "bruxos_pkey" PRIMARY KEY ("id")
);
