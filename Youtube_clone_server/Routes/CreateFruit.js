const express=require('express');
const router=express.Router()
const Fruit=require('../models/fruit')
const mongoose=require('mongoose')


router.post('/createFruit',async (req,res)=>{
    try {
       await Fruit.create({
            name:"almond",
            rating:9
        })
        res.send({success:true})
    } catch (error) {
        res.send({respone:false})
    }
})

module.exports=router;