import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function createUser(data) {
    try {
        await prisma.akunuser.create({
            data: data,
        });
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}
