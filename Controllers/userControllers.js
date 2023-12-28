const User = require("../Model/user");

//POST

const createUser = async (req,res) => {
 try {
  const users = await User.create(req.body);
  res.json(users);
} catch (err) {
  console.log(err)
}

};
//GET
const getUsers = async (req, res) => {
 try {
   const users = await User.find();
   res.json(users);
 } catch (error) {
   console.log(error);
 }
};
//PUT by id
const updateUser = async (req, res) => {
 try {
   const updatedUser = await User.findByIdAndUpdate(req.params.id ,req.body);
   res.json(updatedUser);
 } catch (error) {
   console.log(error);
 }
};
//DELETE by id
const deleteUser = async (req, res) => {
 try {
   const deletedUser = await User.findByIdAndDelete(req.params.id);
   res.json(deletedUser);
 } catch (error) {
   console.log(error);
 }
};






module.exports = {createUser, getUsers , updateUser,deleteUser }