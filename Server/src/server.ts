import express from "express"
import mongoose, { mongo } from "mongoose"
const app = express()

//Middlewares
app.use(express.json())

//Routes

//Init app / Connect to DB
const initApp = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb:localhost:27017/vitajuice")
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Nope"))
    app.listen(3000, () => console.log("Server is up and running"))
}

initApp()