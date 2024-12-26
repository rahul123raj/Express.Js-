const express = require('express')
const mongodb = require('mongodb').MongoClient
const app = express()
const fs = require('fs')

const PORT = 5000

let database

let connectdb = async () =>{
    try {
      let connect =   await mongodb.connect('mongodb://localhost:27017/')
      database = await connect.db('emp')
      await database.createCollection('users')
        console.log('database is connected')
    } catch (error) {
        console.log(err)
    }
}

connectdb()

app.use(express.urlencoded({ extended : true}))

app.get('/',(req,res)=>{
    fs.createReadStream('./index.html').pipe(res)
})

app.post('/empdata',async (req,res) =>{
   await database.collection('users').insertOne(req.body)
//    console.log('data is inserted')
    res.send('data is inserted')
})

app.listen(PORT, err =>{
    if(err) throw err
    console.log(`server is started on port : ${PORT}`)
})