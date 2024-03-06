import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ 
      username: username,
      password: hashedPassword,
      fullName: "TBA", 
      skills: [
        { skillName: "TBA", skillNumber: 1 }
      ],
      description: "TBA",
      company: "TBA",
      position: "TBA",
      points: 0,
      role: "user",
      profileCompleted: false,
    });

    console.log(newUser)
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
