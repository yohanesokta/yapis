import express from "express";
import Routes from "./utils/Routes";
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
Routes(app);

app.listen(PORT, () => {
    console.log(`Server Started : localhost:${PORT}`);
});
