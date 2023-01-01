const express=require('express');
const mongoose=require('mongoose')
const UserInfo=require('../models/UserInfo')
const getUserrouter=express.Router()

getUserrouter.get('/getUser/:Req_username/:Req_password', function (req, res) { 
    const {Req_username,Req_password}=req.params; 
    
    UserInfo.find({username:Req_username,password:Req_password}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else if(allDetails.length==0) {
            res.send( {success:false} )
        }
        else{
            
            res.send({success:true,interest:allDetails[0].interest})
        }
    })
    })


    
module.exports=getUserrouter;
