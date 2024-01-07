import { response } from "express";
import LoginControl from "../components/LoginControl";
import SignControl from "../components/SignControl";
import GetUsers from "./GetUser";
import GenerateDate from "./GenerateDate";

class Controller {
    home(res) {
        res.send("Server Is Started");
    }
    sign(req, res) {
        SignControl(req, res);
    }
    get(res) {
        GetUsers().then((response) => {
            res.json(response);
        });
    }
    login(req, res) {
        LoginControl(req, res).then((response) => {
            if (response == true) {
                res.json({
                    message: "Login Successfull",
                    Time: GenerateDate(),
                });
            } else {
                res.json({
                    message: "Login Fail : " + response,
                });
            }
        });
    }
}

export default Controller;
