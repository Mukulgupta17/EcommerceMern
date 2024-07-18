const express = require("express");
const Token = require("../Model/Token");
const router = express.Router();
router.post("/", async (req, res) => {
  const token = req.body.localtoken;
  try {
    const data = await Token.findOne({ token });
    // console.log(data, "verifytoken");
    res.json({ success: "successfully verified", data });
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
