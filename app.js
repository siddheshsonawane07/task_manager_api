const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

console.log('Task Manager App')

const port = 3000

//middleware
app.use(express.json())

app.use('/api/v1/tasks',tasks)



app.listen(port,console.log(`Server is running on port ${port}`))