import Mission from "../models/missions.model.js";

export const fetchAllMissions = async (req, res) => {
  try {
    const missions = await Mission.find();

    res.status(200).json(missions);
  } catch (error) {
    console.error("Error fetching missions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
