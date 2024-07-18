const express = require("express");
const router = express.Router();
const User = require("../Model/Signupmodel");
const { generateToken } = require("./Jwttoken");
const Token = require("../Model/Token");

router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // console.log(email, password, "qqqqqqqqqqqqqqqq");
  try {
    const data = await User.findOne({ email: email });
    // console.log(data.password, "llllllllllllls");
    // console.log(data.password, "oooooooooooooooooooeeeeeeeeeeeeeeeeeeeee");
    if (!data) {
      res.json({ message: "user is not found " });
    } else if (password == data.password) {
      const tokenstring = generateToken(data);
      const token = (await tokenstring).toString();

      // console.log(token, "generatetokkkkkkkkkkk");
      // const tokenstring = (await token).toString();
      const tokenEntry = new Token({ token: token });
      await tokenEntry.save();

      // data.tokens = data.tokens.concat({
      //   token,
      //   expires: new Date(Date.now() + 60 * 60 * 1000),
      // }); // 1 hour expiration
      // await data.save();
      res.json({ success: "successfull", data, token });
    } else {
      res.json({ message: "Password Does not MAtch" });
    }
  } catch (e) {
    console.log(e);
    res.json({ message: "error is there " });
  }
});

module.exports = router;
