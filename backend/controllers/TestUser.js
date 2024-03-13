import bcrypt from "bcrypt";
import User from "../models/user.model.js";

const skills = [
  {
    username: "superuser",
    password: "admin",
    fullName: "Super User",
    skills: [{ skillName: "Administration", skillNumber: 5 }],
    description: "Super admin of LunchConnect",
    company: "LunchConnect",
    position: "Super Admin",
    points: 0,
    role: "superadmin",
    profileCompleted: false,
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

const hashPasswords = async () => {
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

export default { insertDummyData, hashPasswords };
