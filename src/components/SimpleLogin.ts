export default async function SimpleLogin(req) {
    const data = {
        username: req.body.username,
        password: req.body.password,
    };
    return {
        data: data,
        message: "",
        code: 200,
        status: "success",
    };
}
