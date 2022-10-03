const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a customer name"],
    trim: true,
    maxLength: [100, "Customer name not exceed than 100 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add a email of a customer"],
    maxlength: [100, "Email is can not exceed than 100 characters"],
  },
  phone: {
    type: String,
    required: [true, "Please add a phone number for a customer"],
    maxLength: [16, "phone can not exceed than 16 characters"],
  },
  status: {
    type: String,
    maxLength: [8, "Status can not exceed than 8 characters"],
    default: "inactif", 
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Customer", customerSchema);
