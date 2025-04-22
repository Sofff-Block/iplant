import dbConnect from "@/db/connect";
import Plant from "@/db/models/PlantsSchema";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  switch (request.method) {
    case "GET": {
      const plant = await Plant.findById(id);
      return response.status(200).json(plant);
    }

    case "PUT": {
      const updatedPlant = request.body;
      await Plant.findByIdAndUpdate(id, updatedPlant);
      return response
        .status(200)
        .json({ status: "The plant was successfully updated 🌱." });
    }

    case "PATCH": {
      const partialUpdate = request.body;
      const ownedPlant = await Plant.findByIdAndUpdate(id, partialUpdate, {
        new: true,
      });
      return response
        .status(200)
        .json({ status: "Plant updated.", plant: ownedPlant });
    }

    case "DELETE": {
      await Plant.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ status: "Plant was successfully deleted." });
    }

    default:
      return response.status(405).json({ status: "Method not allowed." });
  }
}
