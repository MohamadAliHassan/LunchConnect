import User from "../models/user.model.js";

export const fetchUserById = async (req, res) => {
  const userId = req.params.userid;
  console.log("Fetching user with ID: ", userId);

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
