const mongoose = require("mongoose");

const userSchema= mongoose.Schema({

 username:{ type: String , required: true },
 email:String,
});

module.exports = mongoose.model("User" , userSchema);
