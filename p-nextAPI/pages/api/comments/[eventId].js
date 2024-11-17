// /api/comments/eventId

export default function handler(request, response) {
  const eventId = request.query.eventId;

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

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    return response
      .status(201)
      .json({ message: "Comments added.", comment: newComment });
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
}
