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

const insertDummyData = async () => {
  try {
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
