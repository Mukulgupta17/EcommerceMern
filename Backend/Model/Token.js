// models/Token.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // 1 hour (or any expiration time you want)
  },
});

module.exports = mongoose.model("Token", TokenSchema);
