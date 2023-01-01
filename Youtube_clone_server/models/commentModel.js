const mongoose=require('mongoose')
const Commented_videos=new mongoose.Schema({

    videoid:String,
    comments:{type:Array},
 
  
});
module.exports= mongoose.model("Commented_videos",Commented_videos);