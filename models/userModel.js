// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   username: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
   // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
