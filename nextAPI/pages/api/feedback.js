import fs from "fs";
import path from "path";

export default function handler(request, response) {
  if (request.method === "POST") {
    console.log(request.body);
    const { email, feedback } = request.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    //store in DB
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const data = fileData.length ? JSON.parse(fileData) : [];
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return response
      .status(201)
      .json({ message: "Success!", feedback: newFeedback });
  }
  response.status(200).json({ message: "Works!" });
}
