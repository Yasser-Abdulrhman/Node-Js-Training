const express = require('express');

const router = express.Router();

const User = require('../Models/users');

router.get("/" , async (req , res) => {
    const users = await User.query();
    res.json(users);

});

router.get("/:id" , async (req , res) => {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.json(user);

});
module.exports = router;