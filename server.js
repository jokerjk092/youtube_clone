const express=require('express');
const bodyparser = require('body-parser')
const mongoose=require('mongoose')
const axios=require('axios')
const cors=require('cors')
const path=require('path')


const app=express();
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
let port=process.env.PORT || 5000;

app.use(express.static(path.join(__dirname+"/public")))

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./public/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });


const URI="mongodb+srv://admin-sumit:sumit123@cluster0.jgi5fgx.mongodb.net/Youtube_db?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);
const mongoD=async()=>{

        await mongoose.connect(URI,{useNewUrlParser:true},async(err,result)=>{
            if(err) console.log(err)
            else
            console.log('success')
        })
}


mongoD();
app.use(express.json())
app.use("/api",require('./Youtube_clone_server/Routes/CreateFruit'))
app.use("/api",require('./Youtube_clone_server/db'))
app.use("/api",require('./Youtube_clone_server/Routes/LikedEntry'))
app.use("/api",require('./Youtube_clone_server/Routes/UserValidate'))
app.use("/api",require('./Youtube_clone_server/Routes/CreateUser'))
app.use("/api",require('./Youtube_clone_server/Routes/CommentEntry'))
app.use("/api",require('./Youtube_clone_server/Routes/GetComments'))
app.use("/api",require('./Youtube_clone_server/Routes/Video_comments'))
app.use("/api",require('./Youtube_clone_server/Routes/GetLikes'))
app.use("/api",require('./Youtube_clone_server/Routes/HistoryEntry'))
app.use("/api",require('./Youtube_clone_server/Routes/GetHistory'))
app.use("/api",require('./Youtube_clone_server/Routes/UniqueUsername'))



app.get('/search/:keyword',(req, res)=>{
let {keyword}=req.params;
// console.log(keyword)
const options = {
    method: 'GET',
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: {q: keyword },
    headers: {
      'X-RapidAPI-Key': '3b7721c1ebmshfc98c1f8b026b76p168edcjsn7fc35a4b686a',
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
  };






   axios.request(options).then(function (response) {
      // console.log(response.data.items);
       res.send(response.data.items)
  }).catch(function (error) {
      console.error(error);
  });
})


app.listen(port,()=>{
    console.log('live')
})






