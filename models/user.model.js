import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  friends: [
    {
      friendId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    }
  ],
  skills: [
    {
      skillName: {
        type: String,
        required: true,
      },
      skillNumber: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
    },
  ],
  description: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "partner", "superadmin"],
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  profileCompleted : {
    type: Boolean,
    required: true,
  },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
