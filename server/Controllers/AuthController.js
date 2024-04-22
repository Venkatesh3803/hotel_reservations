import UserModel from "../Models/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const hassPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hassPass
    const newUser = await UserModel(req.body);
    try {
        const existUser = await UserModel.findOne({ email: newUser.email })
        if (existUser) return res.status(404).json("Email already Exist")
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const loginUser = async (req, res) => {

    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) return res.status(404).json("Invalid ")
        const verifyPass = await bcrypt.compare(req.body.password, user.password)
        if (!verifyPass) return res.status(404).json("Invalid Credentials")


        const token = jwt.sign({
            id: user._id, email: user.email
        }, process.env.JWT, { expiresIn: "2h" })

        const { password, ...info } = user._doc;
        const age = 1000 * 60 * 60 * 24 * 2;


        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age,
        }).status(200).json(info);
    } catch (error) {
        res.status(500).json(error.message)
    }
}