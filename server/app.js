require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./db/conn");

const Products = require("./models/productsSchema");

const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);
const port = 8005;

app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
});

DefaultData();
