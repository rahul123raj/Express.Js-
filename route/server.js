const app = require('./app')

const PORT = 5000

app.listen(PORT, err =>{
    if(err) throw err
    console.log("app is started ")
})