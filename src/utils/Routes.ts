import Controller from "./Controllers";

export default function Routes(app) {
    app.get("/", (req, res) => {
        Controller.home(res);
    });
    app.post("/sign", (req, res) => {
        Controller.sign(req, res);
    });
    app.post("/login", (req, res) => {
        Controller.login(req, res);
    });
    app.post("/simple/login", (req, res) => {
        Controller.simpleLogin(req, res);
    });
    app.get("/get", ({}, res) => {
        Controller.get(res);
    });
}
