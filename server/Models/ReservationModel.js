import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    roomId: {
        type: String,
        required: true
    },
    title: {
        type: String, required: true, unique: true
    },
    address: {
        type: String, required: true,
    },
    city: {
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
    guests: {
        type: Number,
        default: 1
    },
    check_in: {
        type: String,
        required: true
    },
    check_out: {
        type: String,
        required: true
    },
    days: {
        type: Number,
    },
}, { timestamps: true })

export default mongoose.model("reservation", ReservationSchema)