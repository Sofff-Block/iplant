import dbConnect from "@/db/connect";
import Plant from "@/db/models/PlantsSchema";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "GET") {
    const plant = await Plant.findById(id);
    response.status(200).json(plant);
    return;
  } else {
    response.status(405).json({ status: "Method not allowed." });
    return;
  }
}
