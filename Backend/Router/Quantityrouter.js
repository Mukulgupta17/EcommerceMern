// const express = require("express");
// const router = express.Router();
// const Cart = require("../Model/addtocartmodel");
// router.put("/:ids", async (req, res) => {
//   const objectid = req.params.ids;
//   const userid = req.body.id;
//   const quant = req.body.quant;
//   console.log(objectid, userid, quant, "qqqqqqqqqqqqqqqqqq");
//   try {
//     // const cartitemforupdatequantity = await Cart.findOne({
//     //   userid: userid,
//     //   cartitemid: objectid,
//     // });
//     const updatedCartItem = await Cart.findOneAndUpdate(
//       { userid: userid, cartitemid: objectid },
//       { $set: { quantity: quant } },
//       { new: true } // To return the updated document
//     );
//     console.log(updatedCartItem, "pppppppppppppppp");
//   } catch (e) {
//     console.log(e);
//     res.json(e);
//   }
// });
// module.exports = router;

const express = require("express");
const router = express.Router();
const Cart = require("../Model/addtocartmodel");

router.put("/:ids", async (req, res) => {
  const objectid = req.params.ids;
  const userid = req.body.id;
  const quant = req.body.quant;

  //   console.log("ObjectID:", objectid);
  //   console.log("UserID:", userid);
  console.log("Quantity:", quant);

  try {
    const updatedCartItem = await Cart.findOneAndUpdate(
      { userid: userid, cartitemid: objectid },
      { $set: { quantity: quant } }, // Ensure 'qunatity' matches your schema
      { new: true } // To return the updated document
    );

    // console.log("Updated Cart Item:", updatedCartItem);

    if (!updatedCartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.json(updatedCartItem);
  } catch (e) {
    console.log("Error:", e);
    res.status(500).json({ message: "Error updating cart item" });
  }
});

module.exports = router;
