import UserModel from "../Models/UserModel.js"

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if (!user) return res.status(404).json("User not found")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if (!user) return res.status(404).json("you are not authanticated")

        const updatedUser = await UserModel.findByIdAndUpdate(user._id, req.body, { new: true })
        const { password, ...info } = updatedUser._doc
        res.status(200).json(info)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if (!user) return res.status(404).json("you are not authanticated")

        await UserModel.findByIdAndDelete(user._id)
        res.status(200).json("Deleted sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
