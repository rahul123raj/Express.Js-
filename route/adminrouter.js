const express = require('express')
const adminrouter = express.Router()

adminrouter.get('/',(req,res)=>{
    res.send("Admin Home page")
    res.end()
})

adminrouter.get('/login',(req,res)=>{
    res.send("Admin login page")
    res.end()
})

adminrouter.get('/add_users',(req,res)=>{
    res.send("Admin add_users page")
    res.end()
})

module.exports = adminrouter;