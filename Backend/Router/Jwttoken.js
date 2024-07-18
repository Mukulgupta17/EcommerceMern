// utils/jwt.js
const jwt = require("jsonwebtoken");

const generateToken = async (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    "Mukulgupta1712@gmail.com",
    {
      expiresIn: "1h",
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, "Mukulgupta1712@gmailcom");
};

module.exports = { generateToken, verifyToken };
