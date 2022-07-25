import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Int,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    reqruied: true,
  },
  email: {
    type: String,
    reqruied: true,
    uique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
