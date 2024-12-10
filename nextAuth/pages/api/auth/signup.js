import { connectDatabase } from "../../../util/db";

export default async function handler(request, response) {
  const data = request.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    return response.status(400).json({ message: "Invalid request." });
  }

  const client = await connectDatabase();

  const db = client.db();
  db.collection("users").insertOne({ email, password });
}
