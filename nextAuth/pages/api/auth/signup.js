import { hashPassword } from "../../../util/auth";
import { connectDatabase } from "../../../util/db";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = request.body;

    const { email, password } = data;

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      return response.status(400).json({
        message: "Need valid email address and password exceed 7 characters.",
      });
    }

    const client = await connectDatabase();

    const db = client.db("next-auth");
    const existedUser = await db.collection("users").findOne({ email: email });
    if (existedUser) {
      client.close();
      return response
        .status(422)
        .json({ message: "This email already exist!" });
    }
    const hashedPassword = await hashPassword(password);

    const result = await db
      .collection("users")
      .insertOne({ email, password: hashedPassword });

    return response.status(201).json({ message: "Created user!" });
  }

  return response.status(400).json({ message: "Invalid method" });
}
