// middleware/auth.js

const jwt = require("jsonwebtoken");
const Token = require("../Model/Token");

const authenticateJWT = async (req, res, next, token) => {
  //   const token = req.header("Authorization").replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, "your_jwt_secret");

    // Check if the token is in the database
    const tokenEntry = await Token.findOne({ token });
    // console.log("authiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    if (!tokenEntry) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = payload;
    next();
    return true;
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authenticateJWT;
