const express = require("express");
require("./config/dbConfig.js")
const cors = require("cors");
const router = require("./router/routes.js");

const app = express();

app.use(cors({
    origin: "http://localhost:5174",
}));

app.use(express.json());

app.use(router);

app.listen(9090, () => {
    console.log("Server running...........");
});