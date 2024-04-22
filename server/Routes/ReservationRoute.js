import express from "express";
import { deleteReservation, getReservation, getUserReservations, reservation, updateReservation } from "../Controllers/ReservationController.js";
import { verifyToken } from "../MiddleWare/jwt.js";
const route = express.Router();

route.post("/", verifyToken, reservation)
route.get("/:id", verifyToken, getReservation)
route.get("/user/:id", verifyToken, getUserReservations)
route.patch("/:id", verifyToken, updateReservation)
route.delete("/:id", verifyToken, deleteReservation)

export default route;