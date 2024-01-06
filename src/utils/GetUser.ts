import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function GetUsers() {
    try {
        return await prisma.akunuser.findMany();
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect;
    }
}
