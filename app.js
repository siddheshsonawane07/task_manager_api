const express = require('express')
const app = express()

console.log('Task Manager App')

const port = 3000


//routes
app.get('/',(req,res)=>{
    res.send("Task Manager")
})



app.listen(port,console.log(`Server is running on port ${port}`))