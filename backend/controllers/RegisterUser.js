import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const newUser = new User({ username, password });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
