const mongoose = require('mongoose')

function connectDb(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>console.log('Connected to DB')).catch(err=> console.log(err) )
}

module.exports = connectDb