const mongoose=require('mongoose')
const User_information=new mongoose.Schema({
  username:{
    type:String,
    unique: true,
  },
  password:String,
  interest:String,
  liked_videos:{type:Array},
  commented_videos:{type:Array},
  history_videos:{type:Array},

});
module.exports= mongoose.model("userinformations",User_information);
