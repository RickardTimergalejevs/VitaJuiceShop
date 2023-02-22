import express from "express"
import mongoose from "mongoose"
import { userRouter } from "./routes/user.router"
const app = express()

//Middlewares
app.use(express.json())

//Routes
app.use("api/users", userRouter)

//Init app / Connect to DB
const initApp = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb://127.0.0.1:27017/vitajuice")
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Nope"))
    app.listen(3000, () => console.log("Server is up and running"))
}

initApp()