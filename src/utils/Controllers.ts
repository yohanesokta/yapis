import LoginControl from "../components/LoginControl";
import SignControl from "../components/SignControl";
import GetUsers from "./GetUser";
import GenerateDate from "./GenerateDate";
import TemplateJSON from "../components/TemplateJSON";
import SimpleLogin from "../components/SimpleLogin";
import { response } from "express";
class Controller {
    home(res) {
        res.send("Server Is Started");
    }
    sign(req, res) {
        SignControl(req, res);
    }
    get(res) {
        GetUsers().then((response) => {
            res.json(TemplateJSON.data("success", 200, response));
        });
    }
    login(req, res) {
        LoginControl(req, res);
    }
    simpleLogin(req, res) {
        SimpleLogin(req).then((response) => {
            res.json(
                TemplateJSON.infoLogin(
                    response.status,
                    response.code,
                    response.message,
                    response.data,
                    GenerateDate()
                )
            );
        });
    }
}

export default new Controller();
