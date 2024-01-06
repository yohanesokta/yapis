import { response } from "express";
import Controller from "./Controllers";
const Control = new Controller();

export default function Routes(app) {
    app.get("/", (req, res) => {
        Control.home(res);
    });
    app.post("/sign", (req, res) => {
        const response = Control.sign(req);
        if (!response) {
            res.send("Sign Canceled");
        } else {
            res.json(response);
        }
    });
    app.get("/get", ({}, res) => {
        Control.get().then((response) => {
            res.json(response);
        });
    });
}
