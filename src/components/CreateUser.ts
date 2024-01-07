import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function createUser(data) {
    try {
        await prisma.akunuser.create({
            data: data,
        });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        await prisma.$disconnect();
    }
}
