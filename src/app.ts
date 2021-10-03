import express from  'express'
import path from 'path'
import mongoose from 'mongoose'
const uri = "'mongodb://localhost:27017/articles'"
const app = express()
const port = 3000
//json data
app.use(express.json())


//importing routers
require('./routes/routes')(app)
console.log('HeLLO WORDL')


console.log('Added github web hooks')




//setting up templating engines
app.set('views', path.join(__dirname + path.sep +'views'))
app.set('view engine', 'pug')
 //connecting mongo db
//  mongoose.connect(uri)
//  const con = mongoose.connection
//  con.on('open',()=>{
//      console.log(`Database is connected ...`)
//  })
//  con.on('close', ()=>{
//      console.log(`Database is disconnected ...`)
//  })


//starting the server
app.listen(port, ()=>{
    console.log(`Server started at port ${port}`)
})