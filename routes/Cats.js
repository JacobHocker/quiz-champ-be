const express = require('express');
const router = express.Router();
const { Cats } = require("../models");


router.get("/", async (req, res) => {
    const listOfCats =  await Cats.findAll();
    res.json(listOfCats);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id
    const cat = await Cats.findByPk(id);
    res.json(cat);
});

router.post("/", async (req, res) => {
    const cat = req.body;
    await Cats.create(cat);
    res.json(cat);
})

module.exports = router