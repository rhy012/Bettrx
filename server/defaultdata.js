const Products = require("./models/productsSchema");
const productsdata = require("./constant/productsdata");

const DefaultData = async () => {
  try {
    await Products.deleteMany({});
    const storeData = await Products.insertMany(productsdata);
    console.log(storeData);
  } catch (err) {
    console.log("Error : " + error.message);
  }
};

module.exports = DefaultData;
