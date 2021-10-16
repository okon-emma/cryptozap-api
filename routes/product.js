const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add New Product
router.post("/", (req, res) => {
  const user = res.locals.user;
  const { name, price, image } = req.body;

  Product.create({name, price, image});
  res.send({
    success: true,
    message: "Product has been added",
  });
});

// Get All Product
router.get("/", (req, res) => {
const user = res.locals.user;
const { name, price, image } = req.body;

Product.findAll()
  .then((product) => {
    res.send({success: true, data: product });
  })
  .catch((err) => {
    res
      .status(500)
      .send({success: false, message: "Internal Server Error" });
  });
});

// Get All Product
router.get("/:id", (req, res) => {
  const user = res.locals.user;
  const { name, price, image } = req.body;

  Product.findOne({where: {id: req.params.id}})
    .then((product) => {
      res.send({success: true, data: product });
    })
    .catch((err) => {
      res
        .status(500)
        .send({success: false, message: "Internal Server Error" });
    });
});

module.exports = router;
