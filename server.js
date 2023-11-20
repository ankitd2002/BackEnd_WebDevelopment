//create your own server
const express = require('express');
const app = express();

//create the server live on 3000 port
app.listen(3000,()=> {
    console.log("Server started at port no. 3000")
});



//used to parse request.body in express -> Put or Post 
const bodyParser = require('body-parser');

//specially parse json data and add it to the request body object
app.use(bodyParser.json());

// create route on the server
app.get('/',(request,response)=>{
    response.send("Hello everyone ! how are you doing");
})

// create route on the server
app.post('/api/cars',(request,response) =>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car submitted successfully");

})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=> {console.log("Connection Successful")})
.catch((error) =>{console.log("Recieved an error")} );