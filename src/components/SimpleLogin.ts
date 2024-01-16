import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import "dotenv/config";
import formater from "encrypt-with-password";

export default async function SimpleLogin(req) {
    const data = {
        username: req.body.username,
        password: req.body.password,
    };
    async function GetsLogin(request_data) {
        try {
            const data = await prisma.akunuser.findUnique({
                where: {
                    username: request_data.username,
                },
            });
            if (data == null || data == undefined) {
                return {
                    data: null,
                    message: "account not signed",
                    code: 200,
                    status: "failed",
                };
            } else {
                if (
                    request_data.password ==
                    formater.decrypt(data.password, process.env.SECRET)
                ) {
                    let userdata = Object(data);
                    delete userdata.password;
                    delete userdata.tokens;
                    delete userdata.id;
                    delete userdata.uuid;
                    return {
                        data: userdata,
                        message: "",
                        code: 200,
                        status: "success",
                    };
                } else {
                    return {
                        data: null,
                        message: "login failed | not match",
                        code: 200,
                        status: "failed",
                    };
                }
            }
        } catch (error) {
            console.log(error);
            return {
                data: data,
                message: "",
                code: 200,
                status: "success",
            };
        }
    }
    return GetsLogin(data);
}
