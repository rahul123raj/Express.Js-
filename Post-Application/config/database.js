const mongoose = require('mongoose')
require('dotenv').config()

URL = process.env.MONGO_URL

exports.connectDb = async ()=>{
    await mongoose.connect(URL)
    console.log('Database is connected')
}