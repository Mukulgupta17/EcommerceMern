const express = require("express");
const Token = require("../Model/Token");
const router = express.Router();
router.delete("/", async (req, res) => {
  const token = req.body.token;
  //   console.log("token get by deleettoknrouter", token);
  try {
    const data = await Token.findOneAndDelete(token);
    res.json({ success: "successfully deleted", data });
    // console.log(data, "deletetoken after deltedd");
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
