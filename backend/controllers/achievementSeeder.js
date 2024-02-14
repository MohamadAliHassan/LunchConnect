// achievementSeeder.js
import Achievement from "../models/achievement.model.js";

const achievements = [
    {
      title: "Profile",
      description: "Congratulations, you have successfully created your profile!",
      reward: "points",
      amount: 20
    },
    {
      title: "10 hours",
      description: "You have been active on this app for 10 hours!",
      reward: "points",
      amount: 55,
    },
    {
      title: "Hiker",
      description: "Sheesh, you have walked 20 thousand steps, keep up the work!",
      reward: "points",
      amount: 40,
    },
    {
      title: "Morning Person",
      description: "Achieve a 7-day streak of exercising before 7:00 AM.",
      reward: "points",
      amount: 50,
    },
    {
      title: "Weekend Warrior",
      description: "Engage in at least two hours of physical activity every Saturday and Sunday for a month.",
      reward: "points",
      amount: 100,
    },
    {
      title: "Sleep Champion",
      description: "Achieve at least 7 hours of sleep each night for a week.",
      reward: "points",
      amount: 60,
    },
]

const insertAchievements = async () => {
    try {
      // Loop through the achievements array
      for (const achievementData of achievements) {
        // Create a new instance of the Achievement model with the achievement data
        const newAchievement = new Achievement(achievementData);
        // Save the new achievement to the database
        await newAchievement.save();
      }
      console.log("Achievements inserted successfully");
    } catch (error) {
      console.error("Error inserting achievements:", error);
    }
  };

export default insertAchievements;
