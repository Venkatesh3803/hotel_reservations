import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRooms, updateRoom } from "../Controllers/RoomsController.js";
import { verifyToken } from "../MiddleWare/jwt.js";
const route = express.Router();

route.post("/",verifyToken, createRoom)
route.get("/singleroom/:id", getRooms)
route.get("/allrooms", getAllRooms)
route.patch("/:id",verifyToken, updateRoom)
route.delete("/:id",verifyToken, deleteRoom)

export default route;
