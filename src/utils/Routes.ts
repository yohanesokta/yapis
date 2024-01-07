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
        Control.login(req, res);
    });
    app.get("/get", ({}, res) => {
        Control.get(res);
    });
}
