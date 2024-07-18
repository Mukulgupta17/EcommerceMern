const express = require("express");
const router = express.Router();
const User = require("../Model/Signupmodel");
router.post("/", async (req, res) => {
  // console.log(req.body.email);
  const confirmPassword = req.body.confirmPassword;
  const password = req.body.password;
  try {
    const newData = new User({
      firstname: req.body.firstName,
      email: req.body.email,
      lastname: req.body.lastName,
      password: req.body.password,
    });
    // console.log(newData, "newdata");
    if (confirmPassword == password) {
      const data = await newData.save();
      res.json({ success: "successful", data });
    } else {
      res.json({ mesage: "passowrd does not match" });
    }
  } catch (e) {
    console.log(e);
  }
});

// login

// router.get("/signup", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   console.log(email, password, "qqqqqqqqqqqqqqqq");
//   try {
//     const data = User.findOne({ email: email });
//     console.log(data, "llllllllllllls");
//     console.log(data.password, "oooooooooooooooooooeeeeeeeeeeeeeeeeeeeee");
//   } catch (e) {
//     console.log(e);
//     res.json({ message: "error is there " });
//   }
// });

module.exports = router;
