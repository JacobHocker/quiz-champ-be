const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


app.use(express.json())
app.use(cors(
    { 
    credentials: true 
    },
    {
        origin: ['https://quiz-champ.onrender.com', 'https://quiz-champ-be.herokuapp.com/']
    }
    
    ))
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        );
        next();
    });

const db = require("./models")


//! Routers
const quizRouter = require('./routes/Quizs')
app.use("/quizzes", quizRouter);

const questionRouter = require('./routes/Questions')
app.use("/questions", questionRouter);

const userRouter = require('./routes/Users')
app.use("/auth", userRouter);

const catRouter = require('./routes/Cats')
app.use("/categories", catRouter);

const scoreRouter = require('./routes/Scores')
app.use("/scores", scoreRouter);

const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);

const commentRouter = require('./routes/Comments')
app.use("/comments", commentRouter);



db.sequelize
    .sync()
    .then(() => {
        app.listen(process.env.PORT || 2000, () => {
            console.log("Server running on port 2000")
        });
    })
    .catch((err) => {
        console.log(err)
    });