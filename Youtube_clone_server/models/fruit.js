const mongoose=require('mongoose')
const fruitsSchema=new mongoose.Schema({
  name:String,
  rating:Number
});
module.exports= mongoose.model("Fruit",fruitsSchema);

