const express=require('express');
const mongoose=require('mongoose')
const UserInfo=require('../models/UserInfo')
const CreateUserrouter=express.Router()

CreateUserrouter.post('/create_user',async (req,res)=>{
    try {
        const arr=[];


        const {new_username,new_password,new_interest}=req.body;
       await UserInfo.create({
        username:new_username,
        password:new_password,
        interest:new_interest,
        liked_videos:arr,
        commented_videos:arr
        })
        // console.log(req.body)
    } catch (error) {
        console.log(error)

    }
})


module.exports=CreateUserrouter;


