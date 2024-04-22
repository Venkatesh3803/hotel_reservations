import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String, required: true, unique: true
    },
    description: {
        type: String, required: true,
    },
    images: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true

    },
    no_of_bedroom: {
        type: Number,
        default: 1
    },
    no_of_bathroom: {
        type: Number,
        default: 1
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
    },
    postal_code: {
        type: String,
        required: true
    },
    parking: {
        type: Boolean,
        default: false
    },
    distance_bus: {
        type: String,
    },
    distance_airport: {
        type: String,
    },
    wifi: {
        type: Boolean,
        default: false
    },
    daily_cleaning: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
    },
}, { timestamps: true })

export default mongoose.model("rooms", RoomSchema)