const express = require('express');
const router = express.Router();
const { Scores } = require("../models");


router.get('/:quizId/:userId', async (req, res) => {
    const quizId = req.params.quizId;
    const userId = req.params.userId
    const scores = await Scores.findAll({ where: {QuizId: quizId, UserId: userId} });
    res.json(scores);
});


router.post("/", async (req, res) => {
    const score = req.body;
    await Scores.create(score);
    res.json(score);
})

module.exports = router