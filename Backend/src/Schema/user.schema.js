const { Schema, model } = require("mongoose");
const userSchema = new Schema({
  name: {
    title:String,
    first:String,
    last:String
  },
  phone: Number,
  cell: String,
  email: String,
  gender: String,
  login: {
    uuid:String,
    username:String,
    password:String,
    salt:String,
    md5:String
  },
  picture: {
    large:String,
    medium:String,
    thumbnail:String,
     
  },
  registered: {
    age:Number,
    date:String
  }




});

const UserModel = model("coin", userSchema);

module.exports = UserModel;