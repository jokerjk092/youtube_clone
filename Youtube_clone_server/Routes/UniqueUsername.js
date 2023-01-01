const express=require('express');
const mongoose=require('mongoose')
const UserInfo=require('../models/UserInfo')
const getrouter=express.Router()

getrouter.get('/unique_username/:value', function (req, res) {
    // console.log('got called') 
    const {value}=req.params; 
    
    UserInfo.find({username:value}, function (err, allDetails) {
        if (err) {
            console.log(err);
        } else if(allDetails.length==0) {
            res.send( {success:true} )
        }
        else{
            
            res.send({success:false})
        }
        
    })
    })



module.exports=getrouter;