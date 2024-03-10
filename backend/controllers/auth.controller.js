import bcrypt from "bcrypt";
import User from "../models/user.model.js"

export const signup = async (req, res) => {
    try {
        const { username, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" })
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({ error: "Username already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            username: username,
            password: hashedPassword,
            fullName: "null",
            gender: "Male",
            friends: [],
            skills: [
                {
                    skillName: "null",
                    skillNumber: 1,
                }
            ],
            description: "null",
            country: "null",
            company: "null",
            position: "null",
            points: 0,
            role: "user",
            profilePic: gender === "Male" ? maleProfilePic : femaleProfilePic,
            profileCompleted: false,
        })

        await newUser.save();
    }
}