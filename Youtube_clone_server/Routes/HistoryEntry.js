const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const UserInfo = require('../models/UserInfo')

let historyArray = [];

router.post('/post_history_video/:userid', async (req, res) => {
    UserInfo.find({ username: req.params.userid }, async function (err, allDetails) {
        if (err) {
            console.log(err);
        }
        else {
            allDetails[0].history_videos.map((i) => historyArray.push(i))
            // console.log(allDetails[0].liked_videos)
            const newEntry = {
                "image1": req.body.image1,
                "image2": req.body.image2,
                "title": req.body.title,
                "channel": req.body.channel,
                "videoid":req.body.videoId

            }
            historyArray.push(newEntry)
            try {
                await  UserInfo.updateOne({username: req.params.userid},{history_videos:historyArray})
                // console.log("successfully updated history")
                historyArray=[];
            } catch (error) {
                console.log(error)
            }
            res.send({ success: true })
        }
    })

})

module.exports = router;




