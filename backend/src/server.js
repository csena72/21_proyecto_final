const express = require("express");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const compression = require("compression");
const cors = require("cors");

const router = express.Router();

const app = express();

app.use(express.json());
app.use(cors());
app.use(compression());

app.use(productRoutes(router));
app.use(cartRoutes(router));

module.exports = app;