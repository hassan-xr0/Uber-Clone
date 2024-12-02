const dotenv = require('dotenv');
dotenv.config()
const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const app = express()


connectDb()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))




app.get('/',(req, res) => {
    res.send('hello World')
});
app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app