const mongoose = require('mongoose')

const connectDB = (url)=>{
    return mongoose.connect(url,{useUnifiedTopology:true}).then(()=>{console.log("Connection to database");})
}

module.exports = connectDB