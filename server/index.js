import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import RoomsRoute from "./Routes/RoomsRoute.js"
import ReservationRoute from "./Routes/ReservationRoute.js"

const app = express();
const port = 5000;
dotenv.config()
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json())
app.use(cookieParser());




const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to db")
    }).catch((err) => {
        console.log(err)
    })
}

app.listen(port, () => {
    connectDb()
    console.log("Listening at port 5000")
})

// routes
app.use("/api/v1/auth", AuthRoute)
app.use("/api/v1/user", UserRoute)
app.use("/api/v1/rooms", RoomsRoute)
app.use("/api/v1/reservations", ReservationRoute)