const express = require('express');

const router = express.Router();

const Channel = require('../Models/channels');

router.get("/" , async (req , res) => {
    const channels = await Channel.query();
    res.json(channels);

});

router.get("/:id" , async (req , res) => {
    const { id } = req.params;
    const channel = await Channel.query().findById(id);
    res.json(channel);

});
module.exports = router;