import Achievement from "../models/achievement.model.js";

export const fetchAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();

    res.status(200).json(achievements);
  } catch (error) {
    console.error("Error fetching achievements:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
