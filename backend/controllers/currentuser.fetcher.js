import jwtUtil from "../utils/jwtUtil.js";
import User from "../models/user.model.js";

export const fetchUser = async (req, res) => {
    try {
        const token = req.headers.authorization

        const { id } = jwtUtil.validateToken(token);
        console.log(id)

        const user = await User.findById(id);

        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
