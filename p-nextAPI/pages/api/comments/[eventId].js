import {
  connectDB,
  getAllDocuments,
  insertDocument,
} from "../../../helpers/db-util";

export default async function handler(request, response) {
  const eventId = request.query.eventId;
  let client, result;
  try {
    client = await connectDB();
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Connecting to the database failed." });
  }

  if (request.method === "POST") {
    const { email, name, text } = request.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      return response.status(400).json({ message: "Invalid input requests" });
    }

    try {
      const newComment = {
        email,
        name,
        text,
        eventId,
      };

      try {
        result = await insertDocument(client, "comments", newComment);
      } catch (error) {
        return response
          .status(500)
          .json({ message: "Inserting comment failed." });
      }

      newComment._id = result.insertedId;
      client.close();
      return response
        .status(201)
        .json({ message: "Comments added.", comment: newComment });
    } catch (error) {
      console.log(error);
    }
  }

  if (request.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { eventId },
        { _id: -1 }
      );
      client.close();
      return response.status(200).json({ comments: documents });
    } catch (error) {
      return response.status(500).json({ message: "Getting comments failed." });
    }
  }
}
