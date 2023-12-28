const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const UserRouter = require("./Routes/userRoutes.js");
const user = require("./Model/user.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"))
const PORT = process.env.PORT || 4000;

app.use("/api",UserRouter)


app.listen(PORT, () => {
console.log(`server is running on ${PORT}`);
});



