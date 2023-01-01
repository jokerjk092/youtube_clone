const mongoose=require('mongoose')
const Stord_videos=new mongoose.Schema({
    videoid:String,
  image1:String,
  image2:String,
  title:String,
  channel:String, 
  time:String,
  comments:{type:Array},
 
  
});
module.exports= mongoose.model("Stored_videos",Stord_videos);