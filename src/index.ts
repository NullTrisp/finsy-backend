import express from "express";
import stock from "./modules/stock";
import helpers from "./helpers";

const app = express();

app.use(express.json());
app.use(helpers.middlewares.logger);
app.use("/user", stock.router);

app.listen(8080, () => {
    console.log("Service is up");
});

