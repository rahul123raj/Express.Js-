const express = require('express')
const app = express()
const router = require('./router')
const adminrouter = require('./adminrouter')

// app.get('/',(req,res)=>{
//     res.send('Home Page')
//     res.end()
// })

// app.post('/',(req,res)=>{
//     res.send("post request")
//     res.end()
// })

// app.delete('/',(req,res)=>{
//     res.send("delete request")
//     res.end()
// })

app.use("/user", router)
app.use("/adminrouter", adminrouter)

app.use((req,res)=>{
    res.send("page not found")
    res.end()
})

module.exports = app;
