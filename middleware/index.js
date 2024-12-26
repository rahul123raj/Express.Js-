const express = require('express')
const app = express()

app.use((req,res,next) => {
    req.user = 'dinga'
        console.log('in 1st middleware')
        next()
})

app.use((req,res,next) => {
    req.lname = 'raja'
        console.log(`in second middleware `)
        
        next()
})

app.get('/',(req,res) =>{
    res.send(`welcome ${req.user} ${req.lname}`)
})

const PORT = 5000;

app.listen(PORT, err => {
    if(err) throw err
    console.log('app is started')
})