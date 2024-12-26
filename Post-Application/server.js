const express = require('express')
const app = express()
require('dotenv').config()
const {connectDb} = require('./config/database')
const router  = require('./PostRouter/postrouter')

connectDb()

app.use(express.json())

app.use('/apipost',router)

const PORT = process.env.PORT

app.listen(PORT, err =>{
    if(err) throw err
    console.log(`server is started on port: http://localhost:${PORT}`)
})