const express = require('express');
const router = express.Router();
const { Quizs } = require("../models");


router.get("/", async (req, res) => {
    const listOfQuizzes =  await Quizs.findAll();
    res.json(listOfQuizzes);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const quiz = await Quizs.findByPk(id);
    res.json(quiz);
});

router.post("/", async (req, res) => {
    const quiz = req.body;
    await Quizs.create(quiz);
    res.json(quiz);
})

module.exports = router