const express = require('express')
const app = express()
//Server Instantiate

const bodyParser = require('body-parser')
//used to parse req.body in Express -> Specifically used in PUT or POST case
app.use(bodyParser.json())
//specifically parse JSON data and add it to the request.body object


app.listen(3000, ()=>{
    console.log("Server Started at port 3000")
})
//activate the server on 3000 port

//Now creating Routes : 
app.get('/', (req,res) => {
    res.send("Yes Betaa, Dance !")

})

//PostMan Testing
app.post('/api/cars', (request, response) => {
    //here request ke andar hi data hoga
    const {name,brand} = request.body;
    console.log(name)
    console.log(brand)
    response.send("Car Submitted Successfully")
})

//Mongoose Connection for linking MongoDB with Express
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Test',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Successful")
}).catch((error) => {
    console.log("Haan bhai error aa gya")
})
//"test" is the name of the database, if its not created before then it will automatically be created 