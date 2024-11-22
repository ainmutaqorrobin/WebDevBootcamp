import { connectDB, insertDocument } from "../../../helpers/db-util";
export default async function handler(request, response) {
  if (request.method === "POST") {
    const email = request.body.email;

    if (!email || !email.includes("@")) {
      return response.status(400).json({
        message: "Invalid email address.",
        email: email,
      });
    }

    let client;
    try {
      client = await connectDB();
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Connecting to the database failed." });
    }

    try {
      await insertDocument(client, { email: email });
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
