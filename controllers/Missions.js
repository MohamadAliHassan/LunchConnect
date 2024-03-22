import Mission from "../models/missions.model.js";

const missions = [
  {
    requirement: [
      {
        requirementName: "Steps",
        requirementAmount: 10000,
      },
    ],
    task: "jogging",
    points: 15,
    description: "Walk 10000 steps a day for a week",
  },
  {
    requirement: [
      {
        requirementName: "Pages",
        requirementAmount: 10,
      },
    ],
    task: "Reading",
    points: 20,
    description: "Try to read at least 10-15 pages a day for a week",
  },
  {
    requirement: [
      {
        requirementName: "Listening to Podcasts",
        requirementAmount: 2,
      },
    ],
    task: "Podcast",
    points: 15,
    description: "Listen to two of your desired podcast for a week",
  },
];

const insertMissions = async () => {
  try {
    for (const missionData of missions) {
      const newMission = new Mission(missionData);

      await newMission.save();
    }
    console.log("Missions inserted successfully");
  } catch (error) {
    console.error("Error inserting missions:", error);
  }
};
export default insertMissions;
