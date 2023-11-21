//import the todo model

const req = require("express/lib/request");
const ToDo = require("../models/ToDo");

// define route handler
exports.updateToDo = async(req,res) => {

    try{
           // extract todo's based on the id
            const {id} = req.params;
            const {title,description} = req.body;
            const todos = await ToDo.findByIdAndUpdate({_id:id},{title,description,updateAt:DataTransfer.now()});

        

            //data for given id found
            res.status(200)
            .json(
                {
                    success:true,
                    data: todos,
                    message: "Updated successfully",
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