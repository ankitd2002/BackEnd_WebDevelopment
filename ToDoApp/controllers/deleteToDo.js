//import the todo model

const req = require("express/lib/request");
const ToDo = require("../models/ToDo");

// define route handler
exports.deleteToDo = async(req,res) => {

    try{
           // extract todo's based on the id
            const {id} = req.params;
            const {title,description} = req.body;
            await ToDo.findByIdAndDelete(id);

        

            //data for given id found
            res.status(200)
            .json(
                {
                    success:true,
                    message: "deleted todo successfully",
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