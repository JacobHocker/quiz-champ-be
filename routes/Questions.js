const express = require('express');
const router = express.Router();
const { Questions } = require("../models");


router.get('/:quizId', async (req, res) => {
    const quizId = req.params.quizId;
    const questions = await Questions.findAll({ where: {QuizId: quizId}});
    res.json(questions);
});

router.post("/", async (req, res) => {
    const question = req.body;
    await Questions.create(question);
    res.json(question);
})

module.exports = router