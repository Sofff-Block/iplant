import dbConnect from "@/db/connect";
import Plant from "@/db/models/PlantsSchema";

export default async function handler(request, response) {
  await dbConnect();

  switch (request.method) {
    case "GET":
      const plants = await Plant.find();
      response.status(200).json(plants);
      break;

    case "POST":
      const newPlant = request.body;
      await Plant.create(newPlant);
      response.status(201).json({ status: "A new Plant was planted 🌱." });
    default:
      response.status(405).json({ status: "method not allowed." });
      break;
  }
}
