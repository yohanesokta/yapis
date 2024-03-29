import formater from "encrypt-with-password";
import "dotenv/config";
const secret = process.env.SECRET;
import createUser from "./CreateUser";
import GenerateUUID from "../utils/GenerateUUID";
import TemplateJSON from "./TemplateJSON";

export default function SignControl(req, res) {
    let data = {
        uuid: GenerateUUID(),
        username: req.body.username,
        password: req.body.password,
    };

    if (data.username !== undefined && data.password !== undefined) {
        data.password = formater.encrypt(data.password, secret);
        createUser(data).then((response) => {
            if (!response) {
                res.json(
                    TemplateJSON.info(
                        "failed",
                        200,
                        "request and another data is same"
                    )
                );
            } else {
                res.json(TemplateJSON.info("success", 200, "successfull"));
            }
        });
    } else {
        res.json(TemplateJSON.info("cancel", 200, "request not valid"));
    }
}
