const express=require('express');
const mongoose=require('mongoose')
const Commented_videos=require('../models/commentModel')
const getrouter=express.Router()

getrouter.get('/video_comments/:videoId', function (req, res) {
    // console.log('got called') 
    let {videoId}=req.params; 
    
    Commented_videos.find({videoid:videoId}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else if(allDetails.length==0){

            res.send({})
        }
        else{
            // console.log(allDetails)
            res.send( allDetails[0]) 
        }
    })
    })


module.exports=getrouter;