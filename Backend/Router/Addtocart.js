// // const express = require("express");
// // const router = express.Router();
// // router.post("/:id", (req, res) => {
// //   const id = req.params.id;
// //   res.status(200).send(`Received id: ${id}`);

// //   console.log(id, "iddddddddduuuuuuuuuuuuuuuuuuuuooooo");
// //   console.log("ddddddddddddddddddddddddd");
// // });

// // module.exports = router;

// const express = require("express");
// const Product = require("../Model/Edatamodel");
// const Cart = require("../Model/addtocartmodel");
// const router = express.Router();

// router.post("/:id", async (req, res) => {
//   const _id = req.params.id;
//   const userids = req.body.id;
//   console.log("Received id:", _id);
//   console.log("user id ", userids);

//   try {
//     const cartdata = await Cart.find({});
//     console.log(cartdata, "zzzzzzzzzzzzzzzz", cartdata.length);
//     for (let i = 0; i <= cartdata.length - 1; i++) {
//       if (cartdata.objectid == _id) {
//         res.json({ message: "cart is already in cart" });
//       } else {
//         const addcartdata = new Cart({
//           cartitemid: _id,
//           userid: userids,
//         });

//         if (!userids || !_id) {
//           res.json({ message: "user is not accessible or object issues" });
//         } else {
//           const data = await addcartdata.save();
//           res.json(data);
//         }
//       }
//     }
//   } catch (e) {
//     console.log(e);
//   }

//   // Optionally, you can send a response back to the client
//   //   res.status(200).send(`Received id: ${_id} ${data}`);
// });

// module.exports = router;

const express = require("express");
const Product = require("../Model/Edatamodel");
const Cart = require("../Model/addtocartmodel");
const authenticateJWT = require("./Auth");
const router = express.Router();

router.post("/:id", async (req, res) => {
  const _id = req.params.id; // Product ID
  const userids = req.body.id; // User ID
  const token = req.body.token;
  // console.log("Received product id:", _id);
  // console.log("Received user id:", userids);
  // console.log("Received token from frontend:", token);
  // const tokenresult = authenticateJWT(token);
  // console.log(tokenresult, "tokenresultttttt");

  try {
    if (!userids || !_id) {
      return res
        .status(400)
        .json({ message: "User ID or Product ID is missing" });
    }

    const existingCartItem = await Cart.findOne({
      cartitemid: _id,
      userid: userids,
    });

    if (existingCartItem) {
      return res.status(200).json({ message: "Item is already in the cart" });
    } else {
      const addcartdata = new Cart({
        cartitemid: _id,
        userid: userids,
        quantity: 1,
      });

      const data = await addcartdata.save();
      return res.json({ success: "successfuly", data: data });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
