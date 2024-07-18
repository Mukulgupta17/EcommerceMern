const express = require("express");
const Cart = require("../Model/addtocartmodel");
const Product = require("../Model/Edatamodel");
const router = express.Router();
router.post("/", async (req, res) => {
  const userid = req.body.id;

  try {
    // Find all cart items for the user
    const cartItems = await Cart.find({ userid });
    // Get all product details for items in the cart
    const productIds = cartItems.map((item) => item.cartitemid);
    const products = await Product.find({ _id: { $in: productIds } });
    const cartItemsWithDetails = cartItems.map((cartItem) => {
      const product = products.find(
        (product) => product._id.toString() === cartItem.cartitemid
      );
      return {
        ...product._doc,
        quantity: cartItem.quantity, // Add quantity from cart to product details
      };
    });
    // console.log(cartItems, "uuuuuuuuuuu");
    // console.log(cartItemsWithDetails, "sssssssssssss");
    res.json(cartItemsWithDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cart items" });
  }
});

module.exports = router;
