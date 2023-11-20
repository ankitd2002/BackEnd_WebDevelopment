const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=> {console.log("Database Connection Successful")})
.catch((error) =>{
    console.log("Issue in Database connection");
    console.log(error.message);
    process.exit(1);
} );
}

module.exports=dbconnect;