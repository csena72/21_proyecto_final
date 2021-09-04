const express = require("express");
const routes = require("./routes/routes");
const compression = require("compression");
const cors = require("cors");

const router = express.Router();

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());

app.use(routes(router));

module.exports = app;