import User from "../models/user.model.js";

const fetchCompletedUsers = async (req, res) => {
  const payload = res.locals.jwtPayload;
  console.log(payload);
  const currentUserId = payload.id;
  try {
    const users = await User.find({
      _id: { $ne: currentUserId },
      profileCompleted: true,
    });

    return users;
  } catch (error) {
    console.error("Error fetching completed users:", error);
    throw error;
  }
};

export default fetchCompletedUsers;
