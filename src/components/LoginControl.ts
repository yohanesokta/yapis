import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import "dotenv/config";
import formater from "encrypt-with-password";
import GenerateDate from "../utils/GenerateDate";
import TemplateJSON from "./TemplateJSON";
import { response } from "express";
const date = new Date();

function GenerateTokens() {
    return date.valueOf() + Math.random();
}

function MakeTokens(response, data) {
    const tokens: any = response?.tokens?.valueOf();
    const sample = {
        app: data.app,
        date: GenerateDate(),
        token: GenerateTokens(),
    };
    tokens.push(sample);
    return tokens;
}

async function InsertToken(response, data) {
    try {
        await prisma.akunuser.update({
            where: {
                username: response?.username,
            },
            data: {
                tokens: MakeTokens(response, data),
            },
        });
    } catch (error) {
        console.log(error);
    }
}

export default async function LoginControl(req, res) {
    let data = {
        username: req.body.username,
        password: req.body.password,
        app: req.body.app || "defaultApp",
    };
    let func, akun;
    let byToken = true;
    try {
        await prisma.akunuser
            .findUnique({
                where: {
                    username: data.username,
                },
            })
            .then(async (response) => {
                akun = response;
                if (
                    data.password ==
                    formater.decrypt(response?.password, process.env.SECRET)
                ) {
                    const dataUser: any = response?.tokens?.valueOf();
                    dataUser.forEach((element) => {
                        if (
                            element.app !== data.app &&
                            data.app !== undefined
                        ) {
                            byToken = true;
                        } else {
                            byToken = false;
                        }
                    });
                    if (byToken) {
                        if (Object.keys(dataUser).length <= 3) {
                            InsertToken(response, data);

                            func = true;
                        } else {
                            func = "Login is out of value (default 4)";
                        }
                    } else {
                        func = "The application has been logged in";
                    }
                } else {
                    func = "login is not valid | use documentasion";
                }
            });
    } catch (error) {
        console.log(error);
        func = "login failed , server";
    } finally {
        if (func == true) {
            delete akun.password;
            delete akun.tokens;
            res.json(
                TemplateJSON.infoLogin(
                    "success",
                    200,
                    "login successfull",
                    akun,
                    GenerateDate()
                )
            );
        } else {
            res.json(TemplateJSON.info("failed", 200, func));
        }
    }
}
