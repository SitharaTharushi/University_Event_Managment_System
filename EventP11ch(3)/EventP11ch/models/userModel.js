const mongoose = require("mongoose");

//data schema for UserAuthentication
const userSchema = new mongoose.Schema({
    //new
    name: String,
    email: String,
    password: String,
    faculty: String,
  });
  
  const User = mongoose.model("User", userSchema); 

  module.exports = User;