import dbConnect from "@/db/connect";
import Plant from "@/db/models/PlantsSchema";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  switch (request.method) {
    case "GET":
      const plant = await Plant.findById(id).populate("isOwned");
      response.status(200).json(plant);
      break;

    case "PUT":
      const updatedPlant = request.body;
      await Plant.findByIdAndUpdate(id, updatedPlant);

      response
        .status(201)
        .json({ status: "The plant was successfully updated 🌱." });
      break;
    case "PATCH":
      const partialUpdate = request.body;
      const ownedPlant = await Plant.findByIdAndUpdate(id, partialUpdate, {
        new: true,
      });

      response.status(201).json({ status: "Plant updated", plant: ownedPlant });
      break;

    case "DELETE":
      await Plant.findByIdAndDelete(id);

      response.status(200).json({ status: "Plant was successfully deleted" });

    default:
      response.status(405).json({ status: "method not allowed." });
      break;
  }
}
