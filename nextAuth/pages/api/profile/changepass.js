import { getSession } from "next-auth/react";
import { connectDatabase } from "../../../util/db";
import { hashPassword, verifyPassword } from "../../../util/auth";

export default async function handler(request, response) {
  if (request.method !== "PATCH") {
    return response
      .status(405)
      .json({ message: "This endpoint only accept PUT request" });
  }

  const session = await getSession();
  if (!session) {
    return response.status(401).json({ message: "Unauthorized request" });
  }

  const userEmail = session.user.email;
  const oldPassword = request.body.oldPassword;
  const newPassword = request.body.newPassword;

  const client = await connectDatabase();

  const usersCollection = client.db("next-auth").collection("users");

  const user = await usersCollection.findOne({ email: userEmail });

  if (!user) {
    client.close();
    return response.status(404).json({ message: "User is not exist" });
  }

  const currentPassword = user.password;

  const passIsCorrect = await verifyPassword(oldPassword, currentPassword);
  if (!passIsCorrect) {
    client.close();
    return response.status(403).json({ message: "Invalid entered password" });
  }

  const hashedNewPassword = await hashPassword(newPassword);
  const result = await usersCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedNewPassword } }
  );

  client.close();

  return response.status(200).json({ message: "Password updated" });
}
