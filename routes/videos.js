const express = require('express');
const router = express.Router();
const Video = require('../Models/videos');

router.get("/" , async (req , res) => {
    const videos = await Video.query();
    res.json(videos);

});

module.exports  = router;