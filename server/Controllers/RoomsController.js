import RoomsModel from "../Models/RoomsModel.js"


export const createRoom = async (req, res) => {
    const newRoom = RoomsModel(req.body);
    try {
        const room = await newRoom.save();
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json(error.message)
    }

}
export const getRooms = async (req, res) => {
    try {
        const rooms = await RoomsModel.findById(req.params.id)
        if (!rooms) return res.status(404).json("Rooms not found")
        res.status(200).json(rooms)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateRoom = async (req, res) => {
    try {
        const Room = await RoomsModel.findById(req.params.id)
        if (!Room) return res.status(404).json("you are not authanticated")

        const updatedRoom = await RoomsModel.findByIdAndUpdate(Room._id, req.body, { new: true })
        res.status(200).json(updatedRoom)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteRoom = async (req, res) => {
    try {
        const Room = await RoomsModel.findById(req.params.id)
        if (!Room) return res.status(404).json("you are not authanticated")

        await RoomsModel.findByIdAndDelete(Room._id)
        res.status(200).json("Deleted sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllRooms = async (req, res) => {
    const q = req.query;

    const filters = {
        ...(q.cat && { category: q.cat }),
        ...(q.location && { city: { $regex: q.location, $options: "i" } }),
    }

    try {
        const Rooms = await RoomsModel.find(filters).sort({ created: -1 })
        res.status(200).json(Rooms)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
