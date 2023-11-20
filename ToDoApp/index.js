const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json req body
app.use(express.json());

//import routes for ToDo Api
const todoRoutes = require("./routes/ToDo");

//mount the todo Api routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT,() =>{
    console.log('Server started successfully at ${PORT}');
})

//connect to database
const dbconnect = require("./config/database");
dbconnect();

//default route
app.get("/",(req,res)=>{
    res.send('<h1>This is Homepage</h1>');
})