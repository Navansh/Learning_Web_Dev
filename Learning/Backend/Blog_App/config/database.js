const mongoose = require('mongoose')

require("dotenv").config();


const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(() => {
        console.log("DB ka conenction successful")
    }).catch((error) =>{
        console.log("Error aa gya")
        console.log(error)
        process.exit(1)
    })
}

module.exports = dbConnect