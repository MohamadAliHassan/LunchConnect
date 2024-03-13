import User from "../models/user.model.js";

export const fetchCompletedUsers = async (req, res) => {
  const payload = res.locals.jwtPayload;

  const currentUserId = payload.id;
  console.log("Current user ID: ", currentUserId);

  try {
    const users = await User.find({
      _id: { $ne: currentUserId },
      profileCompleted: true,
    });

    res.json(users);
  } catch (error) {
    console.error("Error fetching completed users:", error);
    throw error;
  }
};
