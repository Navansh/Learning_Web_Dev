const mongoose = require('mongoose')

require('dotenv').config();

exports.connectDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() => {
        console.log("DB ka connection successful")
    }).catch((error) =>{
        console.log("Error aa gya")
        console.log(error)
        process.exit(1)
    })
}