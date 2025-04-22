import dbConnect from "@/db/connect";
import Plant from "@/db/models/PlantsSchema";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const plants = await Plant.find();
      return response.status(200).json(plants);

    case "POST":
      const newPlant = request.body;
      await Plant.create(newPlant);
      return response
        .status(201)
        .json({ status: "A new Plant was planted 🌱." });

    default:
      return response.status(405).json({ status: "method not allowed." });
  }
}
