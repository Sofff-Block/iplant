import mongoose from "mongoose";

const { Schema } = mongoose;

const plantsSchema = new Schema({
  name: { type: String, required: true },
  botanicalName: { type: String, required: true },
  imageUrl: {
    type: String,
    default:
      "https://images.pexels.com/photos/2587313/pexels-photo-2587313.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  waterNeed: { type: String, required: true },
  lightNeed: { type: String, required: true },
  fertiliserSeason: { type: [String], default: [] },
  description: { type: String },
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantsSchema);

export default Plant;
