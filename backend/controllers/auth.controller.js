import bcrypt from "bcrypt";
import User from "../models/user.model.js"

import { createToken } from "../utils/jwtUtil.js"

export const signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        // temporary since the frontend does not send confirmPassword
        const confirmPassword = password;

        // temporary fix of using a undeclared variable called gender below
        const gender = "male";

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" })
        }

        const user = await User.findOne({ username });

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

        if (newUser) {
            createToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                fullName: newUser.fullName,
                gender: newUser.gender,
                friends: newUser.friends,
                skills: newUser.skills,
                description: newUser.description,
                country: newUser.country,
                company: newUser.company,
                position: newUser.position,
                points: newUser.points,
                role: newUser.role,
                profilePic: newUser.profilePic,
                profileCompleted: newUser.profileCompleted,
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" })
        }

        const token = createToken(user._id, res);

        res.status(200).json({
            token: token,
            _id: user._id,
            username: user.username,
            role: user.role,
            profileCompleted: user.profileCompleted
        });
    } catch (error) {
        console.log("Erorr in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully " });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}