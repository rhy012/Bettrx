const express = require("express");
const router = new express.Router();

const Products = require("../models/productsSchema");

// get productdata api
router.get("/getproducts", async (req, res) => {
  try {
    const productsdata = await Products.find({});
    res.status(201).json(productsdata);
  } catch (err) {
    console.log("Error : " + err.message);
  }
});

module.exports = router;
