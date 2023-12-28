const express = require("express");
const {createUser, getUsers, updateUser, deleteUser} =require ("../Controllers/userControllers")

const router = express.Router();

// Create User
router.post("/users",createUser);

//Get users
router.get("/users",getUsers)
//update user
router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);



module.exports = router;