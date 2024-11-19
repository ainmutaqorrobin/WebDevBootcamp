// /api/comments/eventId
const { MongoClient } = require("mongodb");

export default async function handler(request, response) {
  const eventId = request.query.eventId;

  const client = await MongoClient.connect(process.env.MONGODB_URL);
  const db = client.db();

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

      const result = await db.collection("comments").insertOne(newComment);

      console.log(result);

      newComment.id = result.insertedId;
      return response
        .status(201)
        .json({ message: "Comments added.", comment: newComment });
    } catch (error) {
      console.log(error);
    }
  }

  if (request.method === "GET") {
    const dummyData = [
      {
        id: "1",
        name: "Robin",
        text: "This event is good",
      },
      {
        id: "2",
        name: "Jimmy",
        text: "Not bad",
      },
    ];

    return response.status(200).json({
      message: "Success",
      comments: dummyData,
    });
  }
  client.close();
}
