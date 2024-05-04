const mongoose = require("mongoose"); //106.195.50.117/32
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Connected!!!");
  })
  .catch((err) => {
    console.log("Error : " + err.message);
  });
