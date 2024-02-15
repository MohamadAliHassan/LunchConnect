import User from "../models/user.model.js";
const skills = [
  {
    username: "Mohammed",
    password: "HelloWorld",
    fullName: "Mohammed Ali",
    skills: [
      { skillName: "Java", skillNumber: 2 },
      { skillName: "NodeJS", skillNumber: 3 },
    ],
    description: "Dummy data lorem",
    company: "Google",
    position: "Mid-level",
  },
];

const insertDummyData = async (req) => {
  try {
    const newUser = new User(skills);

    await newUser.save();
    console.log("Gick igenom");
  } catch (error) {
    console.error("Error creating user:", error);
  }
};
export default insertDummyData;
