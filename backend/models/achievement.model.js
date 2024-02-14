// Import Mongoose
import mongoose from "mongoose";

// Define a Mongoose schema for achievements
const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reward: {
    type: {
        type: String,
        enum: ["points", "giftCard"],
        required: false
    }
  },
  amount: {
    type: Number,
    required: false
  }
});

const Achievement = mongoose.model("Achievement", achievementSchema);

export default Achievement;