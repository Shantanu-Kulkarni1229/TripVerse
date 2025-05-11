const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cors());
const connectToDb = require('./db/db.js');
const userRouter= require('./routes/user.routes.js');
app.use(express.json());
app.use(cookieParser());
connectToDb();
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/users', userRouter);

module.exports = app;