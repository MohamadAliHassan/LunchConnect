import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwtUtil from "../utils/jwtUtil.js";

export async function loginHandler(req, res) {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ error: "Missing username or password!" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(404)
        .json({ error: "User not found or invalid credentials!" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    console.log(user._id);

    if (isPasswordMatch) {
      const tokenPayload = {
        id: user._id,
        username: user.username,
        role: user.role,
        profileCompleted: user.profileCompleted,
      };
      const token = jwtUtil.createToken(tokenPayload);

      console.log(token);

      return res.status(200).json({ message: "Login successful", token });
    } else {
      return res.status(401).json({ error: "Wrong username or password!" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
