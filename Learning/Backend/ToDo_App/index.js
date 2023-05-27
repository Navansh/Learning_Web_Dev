const Express = require('express')
const app = Express();
//server instantiated


//load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;
//ya tph PORT .env file se aayega ya phir by default we'll take it as 4000

//middleware to parse json request body
app.use(Express.json());

//import routes for Todo API
const todoRoutes = require("./routes/todos");
//mount(add) the todo API routes
app.use("/api/v1",todoRoutes)
//mapped the todoRoutes now this -> "/api/v1" will occur everytime we call a route, hence 
//creating a directory structure with the baseUrl and then the Routes

//starting the server
app.listen(PORT, () =>{
    console.log(`Server started at ${PORT}`)
})

//connect to the Db
const dbConnect = require("./config/database")
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send(`<h1>THis is HomePage betaa</h1>`)
})

















