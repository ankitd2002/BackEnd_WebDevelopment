const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createToDo");

//define api routes
router.post("/createToDo",createTodo);

module.exports = router;

