const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  cartitemid: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
