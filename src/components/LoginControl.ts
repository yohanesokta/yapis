import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import "dotenv/config";
import formater from "encrypt-with-password";
import GenerateDate from "../utils/GenerateDate";
const date = new Date();

function GenerateTokens() {
    return date.valueOf() + Math.random();
}

function MakeTokens(data) {
    const tokens: any = data?.tokens?.valueOf();
    const sample = {
        app: "defaultApp",
        date: GenerateDate(),
        token: GenerateTokens(),
    };
    tokens.push(sample);
    return tokens;
}

export default async function LoginControl(req, res) {
    let data = {
        username: req.body.username,
        password: req.body.password,
    };
    let func;
    try {
        await prisma.akunuser
            .findUnique({
                where: {
                    username: data.username,
                },
            })
            .then(async (response) => {
                if (
                    data.password ==
                    formater.decrypt(response?.password, process.env.SECRET)
                ) {
                    const data: any = response?.tokens?.valueOf();
                    if (Object.keys(data).length <= 3) {
                        await prisma.akunuser.update({
                            where: {
                                username: response?.username,
                            },
                            data: {
                                tokens: MakeTokens(response),
                            },
                        });
                        func = true;
                    } else {
                        func = "tokens is out of value";
                    }
                } else {
                    func = "Login is not Valid!";
                }
            });
    } catch (error) {
        func = "Login is not Valid server!";
    } finally {
        if (func == true) {
            return true;
        } else {
            return func;
        }
    }
}
