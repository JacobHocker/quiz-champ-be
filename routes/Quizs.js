const express = require('express');
const router = express.Router();
const { Quizs, Sequelize } = require("../models");


router.get("/", async (req, res) => {
    const listOfQuizzes =  await Quizs.findAll();
    res.json(listOfQuizzes);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const quiz = await Quizs.findByPk(id);
    res.json(quiz);
});
router.get('/categories/:id', async (req, res) => {
    const id = req.params.id
    const quizByCat = await Quizs.findAll({ where: { catId: id}})
    res.json(quizByCat)
})


router.post("/", async (req, res) => {
    const quiz = req.body;
    await Quizs.create(quiz);
    res.json(quiz);
})

module.exports = router