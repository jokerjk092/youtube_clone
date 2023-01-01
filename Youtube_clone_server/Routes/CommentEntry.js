const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const UserInfo = require('../models/UserInfo')
const Stored_videos = require('../models/StoredVideos')
const Commented_videos=require('../models/commentModel')

let commentArray = [];

router.post('/post_commented_video/:userid', async (req, res) => {
    // console.log("got called")
    UserInfo.find({ username: req.params.userid }, async function (err, allDetails) {
        if (err) {
            console.log(err);
        }
        else {
            
            allDetails[0]?.commented_videos.map((i) => commentArray.push(i))
            // console.log(req.body)
            const newEntry = {
                "image1": req.body.image1,
                "image2": req.body.image2,
                "title": req.body.title,
                "channel": req.body.channel,
                "comment":req.body.comment,
                "videoid":req.body.videoId
            }
            commentArray.push(newEntry)
            try {
                await  UserInfo.updateOne({username: req.params.userid},{commented_videos:commentArray})
                // console.log("success")
                commentArray=[];
            } catch (error) {
                console.log(error)
            }
        }
         
          
          
})

           
Commented_videos.find({ videoid: req.body.videoId }, async function (err, allDetails){

                if (err) {
                    console.log(err);
                    }
                 else if(allDetails.length==0) {
                        let cmnt_array=[];
                        
                        cmnt_array.push([req.params.userid,req.body.comment]);

                        Commented_videos.create({
                        videoid:req.body.videoId,
                        comments:cmnt_array,
                        
                        })
                        cmnt_array=[]
                    
                }
                else{
                    
                    let cmt_array=[];
                    allDetails[0].comments.map((cmt)=>cmt_array.push(cmt));
                    cmt_array.push([req.params.userid,req.body.comment])
                    
                    await  Commented_videos.updateOne({videoid: req.body.videoId},{comments:cmt_array})
                    console.log(cmt_array)
                    cmt_array=[];
                   
                }
                

            })
            
})

module.exports = router;


