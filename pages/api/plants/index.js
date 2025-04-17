import dbConnect from "@/db/connect";
import Plant from "@/db/models/PlantsSchema";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const plants = await Plant.find();
    response.status(200).json(plants);
    return;
  } else {
    response.status(405).json({ status: "Method not allowed." });
    return;
  }
}
