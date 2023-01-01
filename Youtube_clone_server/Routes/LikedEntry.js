const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const UserInfo = require('../models/UserInfo')

let likedArray = [];

router.post('/post_liked_video/:userid', async (req, res) => {
    UserInfo.find({ username: req.params.userid }, async function (err, allDetails) {
        if (err) {
            console.log(err);
        }
        else {
            allDetails[0].liked_videos.map((i) => likedArray.push(i))
            // console.log(allDetails[0].liked_videos)
            const newEntry = {
                "image1": req.body.image1,
                "image2": req.body.image2,
                "title": req.body.title,
                "channel": req.body.channel,
                "videoid":req.body.videoId

            }
            likedArray.push(newEntry)
            try {
                await  UserInfo.updateOne({username: req.params.userid},{liked_videos:likedArray})
                // console.log("success")
                likedArray=[];
            } catch (error) {
                console.log(error)
            }
            res.send({ success: true })
        }
    })

})

module.exports = router;




