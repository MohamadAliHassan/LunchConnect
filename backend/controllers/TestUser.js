import bcrypt from "bcrypt";
import User from "../models/user.model.js";

const skills = [
  {
    username: "elonmusk",
    password: "earthisnotflat",
    fullName: "Elon Musk",
    skills: [{ skillName: "Rocket Science", skillNumber: 1 }],
    description: "i am very rich yes and autistic",
    company: "SpaceX, Tesla, X, The Boring Company",
    position: "the motherfucking boss",
    points: 0,
    role: "user",
  },
];

const insertDummyData = async () => {
  try {
    for (const skill of skills) {
      const { username, password } = skill;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        password: hashedPassword,
        ...skill,
      });
      await newUser.save();
      console.log("User created:", newUser);
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const hashPasswords = async () => {
  try {
    for (const skill of skills) {
      const hashedPassword = await bcrypt.hash(skill.password, 10);
      skill.password = hashedPassword;
    }
    await insertDummyData();
  } catch (error) {
    console.error("Error hashing passwords:", error);
  }
};
