import mongoose from "mongoose";
const { Schema } = mongoose;

const plantsSchema = new Schema({
  name: { type: String, required: true },
  botanicalName: { type: String },
  imageUrl: {
    type: String,
    default:
      "https://images.pexels.com/photos/29780009/pexels-photo-29780009/free-photo-of-entspannte-orange-und-weisse-katze-sonnt-sich-im-sonnenlicht.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  waterNeed: { type: String, required: true },
  lightNeed: { type: String, required: true },
  fertiliserSeason: {
    type: [String],
    enum: ["Spring", "Summer", "Fall", "Winter"],
    default: [],
  },

  description: { type: String },
  isOwned: { type: Boolean, default: false },
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantsSchema);

export default Plant;
