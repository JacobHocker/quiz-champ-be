const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { validateToken } = require('../middlewares/AuthMiddleware');

const {sign} = require('jsonwebtoken');


router.post("/", async (req, res) => {
    const { username, password, bio, avatar, country, totalCrown} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
            bio: bio,
            avatar: avatar,
            country: country,
            totalCrown: totalCrown,
        })
        res.json("Success")
    })
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: {username: username}});

    if (!user) res.json({ error: "User does not exist!"})

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ error: "Wrong Username and Password combination!"})

        const accessToken = sign({username: user.username, id: user.id}, 
            "importantsecret"
        );

        res.json({token: accessToken, username: username, id: user.id})
    })
});

router.put('/crowns', async (req, res) => {
    const { totalCrown, id } = req.body
    await Users.update({ totalCrown: totalCrown }, { where: { id: id }})
    res.json(totalCrown)
})

router.get('/user', validateToken, (req, res) => {
    res.json(req.user);
});
router.get('/crown-leaders', async (req, res) => {
    const users = await Users.findAll()
    res.json(users)
})
router.get('/usernameInfo/:username', async (req, res) => {
    const username = req.params.username
    const user = await Users.findOne({ where: { username: username }})
    res.json(user)
})
router.get('/userInfo/:id', async (req, res) => {
    const id = req.params.id
    const user = await Users.findByPk(id);
    res.json(user);
});

module.exports = router