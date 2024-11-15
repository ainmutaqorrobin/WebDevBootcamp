import { buildPath, extractData } from "./feedback";

export default function handler(request, response) {
  const feedbackId = request.query.feedbackId;
  const filePath = buildPath();
  const feedbackData = extractData(filePath);
  const feedbackDetail = feedbackData.find((item) => item.id === feedbackId);

  return response
    .status(200)
    .json({ message: "Success", data: feedbackDetail });
}
