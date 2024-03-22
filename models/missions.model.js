import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  requirement: [
    {
      requirementName: {
        type: String,
        required: true,
      },
      requirementAmount: {
        type: Number,
        required: true,
      },
    },
  ],
  task: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Mission = mongoose.model("Mission", missionSchema);

export default Mission;
