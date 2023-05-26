const express = require('express')

const app = express()

const bodyParser = require('body-parser')
//used to parse req.body in Express -> Specifically used in PUT or POST case
app.use(bodyParser.json())
//specifically parse JSON data and add it to the request.body object


app.listen(3000, ()=>{
    console.log("Server Started at port 3000")
})

app.get('/', (req,res) => {
    res.send("Yes Betaa, Dance !")

})

app.post('/api/cars', (request, response) => {
    //here request ke andar hi data hoga
    const {name,brand} = request.body;
    console.log(name)
    console.log(brand)
    response.send("Car Submitted Successfully")
})