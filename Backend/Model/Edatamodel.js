// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({});
// module.exports = mongoose.model("Edata", UserSchema);

const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image_src: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  compare_at_price: {
    type: Number,
    required: true,
  },
  options: [optionSchema],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
