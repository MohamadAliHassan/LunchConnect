import User from "../models/user.model.js";
const skills = [
  {
    username: "superuser",
    password: "admin",
    fullName: "Super User",
    skills: [
      { skillName: "Administration", skillNumber: 5 }
    ],
    description: "Super admin of LunchConnect",
    company: "LunchConnect",
    position: "Super Admin",
    points: 0,
    role: "superadmin",
  },
];

const insertDummyData = async () => {
  try {
    console.log("inserting")
    for (const skill of skills) {
      const newUser = new User(skill);

      await newUser.save();
      console.log("User created:", newUser);
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
export default insertDummyData;