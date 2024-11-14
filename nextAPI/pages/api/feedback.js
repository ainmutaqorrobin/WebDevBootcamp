import fs from "fs";
import path from "path";

function buildPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractData(filePath) {
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = fileData.length ? JSON.parse(fileData) : [];
  return data;
}

export default function handler(request, response) {
  const filePath = buildPath();
  if (request.method === "POST") {
    const { email, feedback } = request.body;

    const newFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    //store in DB
    const data = extractData(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    return response
      .status(201)
      .json({ message: "Success!", feedback: newFeedback });
  } else {
    const data = extractData(filePath);
    response.status(200).json({ feedback: data });
  }
}
