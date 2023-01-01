const express=require('express');
const mongoose=require('mongoose')
const UserInfo=require('../models/UserInfo')
const getrouter=express.Router()

getrouter.get('/get_history/:Req_username', function (req, res) {
    // console.log('got called') 
    const {Req_username}=req.params; 
    
    UserInfo.find({username:Req_username}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else {

            res.send( allDetails[0].history_videos)
        }
        
    })
    })



module.exports=getrouter;