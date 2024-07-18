const express = require("express");
const router = express.Router();
const Chart = require("../Model/addtocartmodel");
router.delete("/:ids", async (req, res) => {
  const objectid = req.params.ids;
  const userid = req.body.id;
  console.log(objectid, userid, "ids & userid");
  try {
    const data = await Chart.findOneAndDelete(
      { userid: userid, cartitemid: objectid }
      // { $set: { quantity: quant } }
    );
    // console.log(data, "deletedddddddddd");
    res.json({ success: "successfully deleted", data: data });
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
