import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    profilePic: {
        type: Array,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    gender: {
        type: String,
    },
    about: {
        type: String,
    },
    region: {
        type: String,
    },
}, { timestamps: true })

export default mongoose.model("user", UserSchema)