// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  city: String,
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
