import User from "../models/user.model.js";

export const fetchUser = async (req, res) => {
    try {
        const payload = res.locals.jwtPayload;
        console.log(payload)
        const user = await User.findById(payload.userid);
        console.log(user)
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
