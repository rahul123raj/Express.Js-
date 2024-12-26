let mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/note_app'

 exports.connectdb = async () =>{
    await mongoose.connect(url)
    console.log("database is connected")
}
