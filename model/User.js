const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  role:String,
  phno:Number,
  bio:String,
  email:String,
  photo:String,
  projects:[String],

});
const User=new mongoose.model("User",UserSchema);
module.exports=User;
