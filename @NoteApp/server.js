const express = require('express')
const app = express()
const {connectdb} = require('./config/database')
const createRouter = require('./router/noterouter')


const PORT = 5000

connectdb()

app.use(express.json())

app.use('/api',createRouter)


app.listen(PORT,err =>{
    if(err) throw err
    console.log(`server is started on port : ${PORT}`)
})

