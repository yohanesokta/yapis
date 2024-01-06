import { response } from "express";
import Controller from "./Controllers";
const Control = new Controller();

export default function Routes(app) {
    app.get("/", (req, res) => {
        Control.home(res);
    });
    app.post("/sign", (req, res) => {
        Control.sign(req, res);
    });
    app.post("/login", (req, res) => {
        Control.login(req).then((response) => {
            if (response) {
                res.send("BERHASIL LOGIN");
            } else {
                res.send("GAGAL LOGIN");
            }
        });
    });
    app.get("/get", ({}, res) => {
        Control.get().then((response) => {
            res.json(response);
        });
    });
}
