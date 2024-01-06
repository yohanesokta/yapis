import formater from "encrypt-with-password";
import "dotenv/config";
const secret = process.env.SECRET;
import createUser from "./CreateUser";
import { response } from "express";

export default function SignControl(req, res) {
    let data = {
        username: req.body.username,
        password: req.body.password,
    };

    if (data.username !== undefined && data.password !== undefined) {
        data.password = formater.encrypt(data.password, secret);
        createUser(data).then((response) => {
            if (!response) {
                res.send("USERNAME NOT VALID");
            } else {
                res.send("SUCCSESS");
            }
        });
    } else {
        res.send("SIGN CANCEL");
    }
}
