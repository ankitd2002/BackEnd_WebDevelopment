//import the todo model

const req = require("express/lib/request");
const ToDo = require("../models/ToDo");

// define route handler
exports.getToDo = async(req,res) => {
    try{
            // fetch all to do s items from database
            const todos = await ToDo.find({});

            //response
            res.status(200)
            .json(
                {
                    success:true,
                    data: todos,
                    message: "Entire ToDo data is fetched",
                }
            );
          
    }catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            errror: err.message,
            message: 'Server Error',

        });
       
    }

}

exports.getToDoById = async(req,res) => {

    try{
           // extract todo's based on the id
            const id = req.params.id();
            const todos = await ToDo.findById({_id:id});

            //data for given id not found
            if(!todo){
                return res.status(404).json(
                    {
                        success:false,
                        message: "No Data found with given ID",
                    }
                )
            }

            //data for given id found
            res.status(200)
            .json(
                {
                    success:true,
                    data: todos,
                    message: "Entire ToDo data is fetched",
                }
            );
          
    }catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            errror: err.message,
            message: 'Server Error',

        });
       
    }
}