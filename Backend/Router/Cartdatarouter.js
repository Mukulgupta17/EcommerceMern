const express = require("express");
const Product = require("../Model/Edatamodel");
const router = express.Router();
router.get("/", async (req, res) => {
  const data = await Product.find({});
  res.json(data);
  // res.status({ success: "successfull" }).json(data);

  // console.log(data, "ppppppppppppppp");
  //   const productData = {
  //     id: 90,
  //     vendor: "mukul",
  //     name: "Solid Polo Collar Grey T-shirt",
  //     image_src: [
  //       "https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Denim_0.jpg?v=1603267107",
  //     ],
  //     price: "74",
  //     compare_at_price: "200",
  //     tag: "Denim",
  //     options: [
  //       {
  //         id: "1020",
  //         name: "Size",
  //         value: "xs",
  //       },
  //       {
  //         id: "1021",
  //         name: "Size",
  //         value: "small",
  //       },
  //       {
  //         id: "1022",
  //         name: "Size",
  //         value: "medium",
  //       },
  //       {
  //         id: "1023",
  //         name: "Size",
  //         value: "large",
  //       },
  //       {
  //         id: "1024",
  //         name: "Size",
  //         value: "xl",
  //       },
  //     ],
  //   };

  //   try {
  //     const newProduct = new Product(productData);
  //     await newProduct.save();
  //     res
  //       .status(201)
  //       .json({ message: "Product added successfully", product: newProduct });
  //   } catch (error) {
  //     res.status(500).json({ message: "Failed to add product", error });
  //   }
});
module.exports = router;
