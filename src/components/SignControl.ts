import excryptPw from "encrypt-with-password";
import "dotenv/config";
const secret = process.env.SECRET;
import createUser from "./CreateUser";

export default function SignControl(req) {
    let data = {
        username: req.body.username,
        password: req.body.password,
    };

    if (data.username !== undefined && data.password !== undefined) {
        data.password = excryptPw.encrypt(data.password, secret);
        createUser(data);
        return data;
    }
    return false;
}
