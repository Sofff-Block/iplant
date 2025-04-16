import mongoose from "mongoose";

const { Schema } = mongoose;

const plantsSchema = new Schema({
  name: { type: String, required: true },
  botanicalName: { type: String },
  imageUrl: { type: String },
  waterNeed: { type: String, required: true },
  lightNeed: { type: String, required: true },
  fertiliserSeason: { type: [String], default: [] },
  description: { type: String },
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantsSchema);

export default Plant;
