//import the todo model

const req = require("express/lib/request");
const ToDo = require("../models/ToDo");

// define route handler
exports.createToDo = async(req,res) => {
    try{
            // extract title and description from request body
            const{title,description} = req.body;

            //create a new todo object and insert into the db
            const response = await ToDo.create({title,description});

            //send a json response with a success flag
            req.status[200].json(
                {
                    sucesss:true,
                    data:response,
                    message: "Entry Created Successfully"
                }
            );
    }catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
             sucesss:false,
             data:"internal server error",
             message:err.message,
        })

    }

}