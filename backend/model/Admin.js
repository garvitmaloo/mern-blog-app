const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  adminName: { type: String, required: true },
  isAdmin: { type: Boolean },
});

module.exports = mongoose.model("Admin", AdminSchema);
