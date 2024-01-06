import formater from "encrypt-with-password";
import SignControl from "../components/SignControl";
import GetUsers from "./GetUser";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import "dotenv/config";
class Controller {
    home(res) {
        res.send("Server Is Started");
    }
    sign(req, res) {
        SignControl(req, res);
    }
    get() {
        return GetUsers();
    }
    async login(req) {
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
                .then((response) => {
                    if (
                        data.password ==
                        formater.decrypt(response?.password, process.env.SECRET)
                    ) {
                        func = true;
                    } else {
                        func = false;
                    }
                });
        } catch (error) {
            return false;
        } finally {
            if (func) {
                return true;
            } else {
                return false;
            }
        }
    }
}

export default Controller;
