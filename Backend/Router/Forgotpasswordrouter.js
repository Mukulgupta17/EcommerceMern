// const express = require("express");
// const router = express.Router();
// const User = require("../Model/Signupmodel");
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "mukulgupta1712@gmail.com",
//     pass: "zhbg tkub uivz mkvq",
//   },
// });
// let otp = Math.floor(Math.random() * 100000);
// router.post("/forgotpassword", async (req, res) => {
//   const to = req.body.email;
//   console.log(to, ".........,,,,,,,,,,", otp);
//   try {
//     const data = await User.findOne({ email: to });
//     // console.log(data, "[[[[[[[[[[\\\\\\\\\\data");
//     res.json({ success: "successfully", data });
//   } catch (e) {
//     console.log(e);
//   }

//   const mailOptions = {
//     from: "mukulgupta1712@gmail.com",
//     to,
//     subject: "Password Change ",
//     text: `your one time password is ${otp}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       return res.status(500).send(error.toString());
//     }
//     console.log("Email sent: " + info.response);
//     res.status(200).send("Email sent");
//   });
// });
// router.post("/updatepassword/:id", async (req, res) => {
//   const _id = req.params.id;
//   //   const ids = "668c0dba45d26a6f7cff05d7"; // Example _id as string

//   const userotp = req.body.otp;
//   const password = req.body.password;
//   console.log(_id, "verifyyyyyyyyffffffffffff", userotp, otp);
//   try {
//     if (otp == userotp) {
//       const data = await User.findByIdAndUpdate(
//         _id,
//         {
//           password: password,
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//       res.json({ success: "successfull", data });
//     } else {
//       res.json({ message: "invlaid otp" });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });
// module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../Model/Signupmodel");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mukulgupta1712@gmail.com",
    pass: "zhbg tkub uivz mkvq",
  },
});

let otp = Math.floor(Math.random() * 100000);

router.post("/forgotpassword", async (req, res) => {
  const to = req.body.email;
  console.log(to, ".........,,,,,,,,,,", otp);
  try {
    const data = await User.findOne({ email: to });
    res.json({ success: "successfully", data });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }

  const mailOptions = {
    from: "mukulgupta1712@gmail.com",
    to,
    subject: "Password Change ",
    text: `Your one-time password is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send(error.toString());
    }
    console.log("Email sent: " + info.response);
    res.status(200).send("Email sent");
  });
});

router.put("/updatepassword/:id", async (req, res) => {
  const _id = req.params.id;
  const userotp = req.body.otp;
  const password = req.body.password;

  try {
    if (otp == userotp) {
      const updatedUser = await User.findByIdAndUpdate(
        _id,
        { password: password },
        { new: true, runValidators: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ success: "Password updated successfully", data: updatedUser });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
