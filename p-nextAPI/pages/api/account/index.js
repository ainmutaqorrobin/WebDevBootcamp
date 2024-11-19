const { MongoClient } = require("mongodb");
export default async function handler(request, response) {
  if (request.method === "POST") {
    const email = request.body.email;

    if (!email || !email.includes("@")) {
      return response.status(400).json({
        message: "Invalid email address.",
        email: email,
      });
    }

    try {
      const client = await MongoClient.connect(process.env.MONGODB_URL);
      const db = client.db();
      await db.collection("emails").insertOne({ email: email });
      client.close();

      return response.status(201).json({
        message: "Successfull",
        data: email,
      });
    } catch (error) {
      console.log(error);
      return response.status(500).json({
        message: "Failed",
        error: error.message,
      });
    }
  }
}
