import jwt from "jsonwebtoken"


export const verifyToken = async (req, res, next) => {
    const headers = req.cookies.token;
    if (!headers) return res.status(404).json("Token not avaliable");
    try {
        jwt.verify(headers, process.env.JWT, (err, user) => {
            if (err) return res.status(404).json(err.message);
            req.user = user;
            next()
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
}