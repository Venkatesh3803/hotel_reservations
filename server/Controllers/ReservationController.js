import ReservationModel from "../Models/ReservationModel.js";


export const reservation = async (req, res) => {
    const newReservation = ReservationModel(req.body);
    try {
        const reservation = await newReservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json(error.message)
    }

}
export const getReservation = async (req, res) => {
    try {
        const reservations = await ReservationModel.findById(req.params.id)
        if (!reservations) return res.status(404).json("Rooms not found")
        res.status(200).json(reservations)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const getUserReservations = async (req, res) => {
    try {
        const reservations = await ReservationModel.find({ userId: req.user.id })
        res.status(200).json(reservations)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateReservation = async (req, res) => {
    try {
        const reservation = await ReservationModel.findById(req.params.id)
        if (!reservation) return res.status(404).json("you are not authanticated")

        const updatedreservations = await ReservationModel.findByIdAndUpdate(reservation._id, req.body, { new: true })
        res.status(200).json(updatedreservations)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteReservation = async (req, res) => {
    try {
        const reservation = await ReservationModel.findById(req.params.id)
        if (!reservation) return res.status(404).json("you are not authanticated")

        await ReservationModel.findByIdAndDelete(reservation._id)
        res.status(200).json("Deleted sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


