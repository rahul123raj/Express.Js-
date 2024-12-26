const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("Home Page")
    res.end()
})

router.get('/login',(req,res)=>{
    res.send("Login Page")
    res.end()
})

module.exports = router;
