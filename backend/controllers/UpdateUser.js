import User from "../models/user.model.js";

export const updateProfile = async (req, res) => {
  try {
    const profileData = req.body;
    const payload = res.locals.jwtPayload;
    profileData.profileCompleted = true;
    
    await User.findByIdAndUpdate(payload.userid, profileData);
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
