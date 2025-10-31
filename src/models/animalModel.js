import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const findAll = async () => {
    return await prisma.animais.findMany({
        orderBy: { nome: 'asc' }
    });
}

export const findById = async (id) => {
    return await prisma.animais.findUnique({
        where: { id: Number(id) }
    });
}

export const create = async (data) => {
    return await prisma.animais.create({
        data: {
            nome: data.nome,
            especie: data.especie,
            dono: data.dono,
            idade: data.idade
        }
    })
}

export  const deleteAnimal = async (id) => {
    return await prisma.animais.delete({
        where: { id: Number(id) }
    })
}

export const update = async (id, data) => {
    return await prisma.animais.update({
        where: { id: Number(id) },
        data: {
            ...(data.nome && { nome: data.nome }),
            ...(data.especie && { especie: data.especie }),
            ...(data.dono && { dono: data.dono }),
            ...(data.idade && { idade: data.idade }),
    
        }
    })
}