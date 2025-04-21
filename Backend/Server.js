const express = require('express')
const app = express();
const route = require('./Route')
const port = 3000
app.use(express.json())
app.use("/",route)
// app.get('/',async(req,res)=>{
//     console.log("welcome")
// })

app.listen(port,async(req,res)=>{
    console.log(`server is running in ${port}`)
})