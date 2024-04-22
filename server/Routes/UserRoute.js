import express from "express"
import { deleteUser, getAllUser, getUser, updateUser } from "../Controllers/UserController.js";
import { verifyToken } from "../MiddleWare/jwt.js";
const route = express.Router();

route.get("/single/:id", getUser)
route.get("/allusers", getAllUser)
route.patch("/:id", verifyToken, updateUser)
route.delete("/:id",verifyToken, deleteUser)

export default route