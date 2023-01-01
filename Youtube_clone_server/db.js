const express=require('express');
const mongoose=require('mongoose')
const Fruit=require('../Youtube_clone_server/models/fruit')
const getrouter=express.Router()

getrouter.get('/getdata', function (req, res) {   
    Fruit.find({}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else {
            res.send({ details: allDetails })
        }
    })
    })

module.exports=getrouter;


// getrouter.get('/getdata',(req,res)={ 
//     mongoose.connection.db.collection("test1").then((res)=>{});
//     fetch_data.find({}).toArray((err,data)=>{
//         if(err) console.log(err)
//         else
//         console.log(data);
// })

// })